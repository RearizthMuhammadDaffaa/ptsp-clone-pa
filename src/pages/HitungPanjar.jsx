import React, { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Layout from "../components/Layout";

const HitungPanjar = () => {
  const { radius } = useParams();
  const location = useLocation();
  const { harga, title,kec } = location.state || {};
  const totalhargaPendaftaran = harga.pendaftaran + harga.redaksi + harga.materai;
  const totalHargaPenggugat = title == "istri" ? harga.panggilanPenggugat * 2 : harga.panggilanPenggugat * 3;
  const totalHargaTergugat = title == "istri" ? harga.panggilanTergugat * 3 : harga.panggilanTergugat * 4;
  const totalHarga = totalhargaPendaftaran + totalHargaPenggugat + totalHargaTergugat;

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Layout title="Kalkulator Panjar Biaya Perkara">
      <div class="grid grid-cols-1 divide-y">
        <h1 className="p-1 mt-1">Biaya Pendaftaran : {harga.pendaftaran}</h1>
        <h1 className="p-1 mt-1">Biaya PNBP pgl & PBT : {harga.pendaftaran}</h1>
        <h1 className="p-1 mt-1">Redaksi : {harga.redaksi}</h1>
        <h1 className="p-1 mt-1">Materai : {harga.materai}</h1>
        <h1 className="p-1 mt-1">proses : {harga.materai}</h1>
        <h1 className="p-1 mt-1 text-sm font-bold">Biaya Panggilan {title == 'istri' ? 'Penggugat (2x)': 'Termohon (3x)'}</h1>
        <h1 className="p-1 mt-1">kecamatan : {kec}</h1>
        <h1 className="p-1 mt-1">Besar Biaya/Panggilan : {harga.panggilanPenggugat}</h1>
        <h1 className="p-1 mt-1">jumlah Biaya/Panggilan : {harga.panggilanPenggugat * 2}</h1>
        <h1 className="p-1 mt-1 text-sm font-bold">Biaya Panggilan {title == 'istri' ? 'Penggugat (3x)': 'Termohon (4x)'}</h1>
        <h1 className="p-1 mt-1">Besar Biaya/Panggilan : {harga.panggilanTergugat}</h1>
        <h1 className="p-1 mt-1">jumlah Biaya/Panggilan : {harga.panggilanTergugat * 3}</h1>
        <h1 className="p-1 mt-1">Jumlah Total Biaya Panjar : {formatRupiah(totalHarga)}</h1>
        <p className="text-sm text-gray-500">Perhatian: Kalkulator Panjar Biaya Perkara ini hanyalah alat bantu untuk mengetahui estimasi biaya panjar perkara. Informasi yang dihasilkan bukan data baku dan mungkin terdapat perbedaan.</p>
        <Link to='/panjar'>
          <button className="btn btn-info mx-auto block mt-2">kembali</button>
        </Link>
      </div>
    </Layout>
  );
};

export default HitungPanjar;
