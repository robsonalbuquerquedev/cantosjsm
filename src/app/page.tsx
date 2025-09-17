"use client";

import { useEffect, useState } from "react";
import { database } from "@/lib/firebase";
import { ref, onValue, remove, set } from "firebase/database";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaTimes, FaEdit } from "react-icons/fa";

interface Song {
  id?: string;
  title: string;
  tone: string;
  lyrics: string;
  source: string;
}

export default function Home() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalDeleteId, setModalDeleteId] = useState<string | null>(null);
  const [modalEditId, setModalEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editTone, setEditTone] = useState("");
  const [editLyrics, setEditLyrics] = useState("");
  const songsPerPage = 9;

  // Carrega músicas do Firebase
  useEffect(() => {
    const songsRef = ref(database, "songs");
    const unsubscribe = onValue(songsRef, (snapshot) => {
      const data = snapshot.val() || {};

      const uniqueSongs = Object.entries(data).reduce((acc: Song[], [id, song]: any) => {
        if (!acc.some((s) => s.title.toLowerCase() === song.title.toLowerCase())) {
          acc.push({ id, ...song });
        }
        return acc;
      }, []);

      setSongs(uniqueSongs);
    });

    return () => unsubscribe();
  }, []);

  // Filtra músicas
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(filter.toLowerCase()) ||
      song.tone.toLowerCase().includes(filter.toLowerCase())
  );

  // Paginação
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = filteredSongs.slice(indexOfFirstSong, indexOfLastSong);
  const totalPages = Math.ceil(filteredSongs.length / songsPerPage);

  // Excluir música
  const handleDelete = async (songId?: string) => {
    if (!songId) return;
    try {
      await remove(ref(database, `songs/${songId}`));
      setModalDeleteId(null);
      alert("Música removida com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao remover música. Tente novamente.");
    }
  };

  // Abrir modal de edição
  const handleEditOpen = (song: Song) => {
    setModalEditId(song.id || null);
    setEditTitle(song.title);
    setEditTone(song.tone);
    setEditLyrics(song.lyrics);
  };

  // Salvar alterações de edição
  const handleEditSave = async () => {
    if (!modalEditId) return;

    try {
      await set(ref(database, `songs/${modalEditId}`), {
        title: editTitle,
        tone: editTone,
        lyrics: editLyrics,
        source: "manual",
      });
      setModalEditId(null);
      alert("Música atualizada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar música. Tente novamente.");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">Cantos JSM</h1>

      {/* Filtro */}
      <div className="mb-6 max-w-lg mx-auto sm:mx-0">
        <input
          type="text"
          placeholder="Filtrar por título"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Lista de músicas */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {currentSongs.map((song, index) => (
            <motion.div
              key={song.id}
              className="relative rounded-xl p-4 shadow-lg bg-white/80 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <h2 className="text-xl font-bold mb-2 text-gray-900 drop-shadow">{song.title}</h2>
              <p className="font-medium mb-2 text-gray-800">Tom: {song.tone}</p>
              <p className="text-sm whitespace-pre-wrap text-gray-700">{song.lyrics}</p>

              {/* Botões de ação */}
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => handleEditOpen(song)}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  title="Editar música"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => setModalDeleteId(song.id || null)}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  title="Excluir música"
                >
                  <FaTrash />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredSongs.length === 0 && (
        <p className="mt-4 text-center text-white/80">Nenhuma música encontrada.</p>
      )}

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
          >
            Anterior
          </button>
          <span className="px-3 py-1">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
          >
            Próximo
          </button>
        </div>
      )}

      {/* Modal de exclusão */}
      <AnimatePresence>
        {modalDeleteId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-lg p-6 max-w-sm w-full shadow-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4">Confirmar exclusão</h2>
              <p className="mb-6 text-black">Deseja realmente excluir esta música?</p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setModalDeleteId(null)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 flex items-center space-x-1 cursor-pointer"
                >
                  <FaTimes /> <span>Cancelar</span>
                </button>
                <button
                  onClick={() => handleDelete(modalDeleteId)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center space-x-1 cursor-pointer"
                >
                  <FaTrash /> <span>Excluir</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de edição */}
      <AnimatePresence>
        {modalEditId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-lg p-6 max-w-sm w-full shadow-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4">Editar Música</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-semibold text-black">Título</label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-black">Tom</label>
                  <input
                    type="text"
                    value={editTone}
                    onChange={(e) => setEditTone(e.target.value)}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-black">Letra</label>
                  <textarea
                    value={editLyrics}
                    onChange={(e) => setEditLyrics(e.target.value)}
                    className="w-full border rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => setModalEditId(null)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 flex items-center space-x-1 cursor-pointer"
                >
                  <FaTimes /> <span>Cancelar</span>
                </button>
                <button
                  onClick={handleEditSave}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center space-x-1 cursor-pointer"
                >
                  <FaEdit /> <span>Salvar</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
