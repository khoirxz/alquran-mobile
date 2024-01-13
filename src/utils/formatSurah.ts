export const formatIconSurah = (id: number) => {
  if (id < 10) {
    // Satuan, tambahkan "00" didepannya
    return "00" + id;
  } else if (id < 100) {
    // Belasan/puluhan, tambahkan "0" didepannya
    return "0" + id;
  } else {
    // Ratusan atau lebih, tidak ada tambahan
    return id.toString();
  }
};
