import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { dataKecamatan,dataHarga } from "../utils/data";
import { Link,useNavigate } from "react-router-dom";
const Panjar = () => {
  const [area,setArea] = useState('dalam-kabupaten');
  const [radiusTergugat,setRadiusTergugat] = useState(1);
  const [radiusPenggugat,setRadiusPenggugat] = useState(1);
  const [harga,setHarga] = useState({});
  const [kec,setKec] = useState('');
  const navigate = useNavigate();
  const [title,setTitle] = useState('suami');

  useEffect(() => {
    const radiusTerkecil = Math.min(radiusPenggugat, radiusTergugat);
    const hargaDitemukan = dataHarga.find(item => item.radius === radiusTerkecil);

    if (hargaDitemukan) {
      setHarga(hargaDitemukan);
    }

   

  }, [radiusPenggugat, radiusTergugat]);

  const handleHitungPanjar = () => {
    const radiusTerkecil = Math.min(radiusPenggugat, radiusTergugat);
    navigate(`/panjar/${radiusTerkecil}`, { state: { harga ,title,kec} }); // Navigasi dengan parameter radius dan data harga
  };
  return (
    <Layout title="Kalkulator Panjar Biaya Perkara">
      <section className="flex flex-col ">
        <h1 className="m-2 text-base font-semibold">Jenis Perkara</h1>
        <div className="flex flex-col p-3 border-b-2 border-b-black">
          <select className="select select-bordered" onChange={(e)=> setTitle(e.target.value)}>
            <option disabled selected>
              Jenis Perkara
            </option>
            <option value="suami">Cerai Talak (Diajukan Suami)</option>
            <option value="istri">Cerai Gugat (Diajuka istri)</option>
            <option value="permohonan">permohonan</option>
          </select>
        </div>
        {
          title != 'permohonan' && (
            <div>
                <h1 className="mt-2 text-base font-semibold">{title == 'suami' ?'Data Termohon (suami)' :  'Data Penggugat (Istri)'}</h1>
        <div className="flex flex-col p-3 border-b-2 border-b-black gap-2">
          <select className="select select-bordered" onChange={(e) => setArea(e.target.value)}>
            <option disabled selected>
              Tempat tinggal {title == 'suami' || title == 'permohonan' ?'Pemohon' : 'Penggugat'}
            </option>
            <option value='dalam-kabupaten'>Dalam Kabupaten Sumedang</option>
            <option value='luar-kabupaten'>Luar Kabupaten Sumedang</option>
          </select>
          {area == 'luar-kabupaten' ? (
            <input type="number" placeholder="Type here" className="input input-bordered w-full " />
          ) : (
            <select className="select select-bordered" onChange={(e)=> {
              setRadiusPenggugat(e.target.value)
              setKec(e.target.options[e.target.selectedIndex].text); 
              }}>
              {
                dataKecamatan.map((kec,i)=> (
                  <option key={i} value={kec.radius}>{kec.kecamatan}</option>
                ))
              }
            
          </select>
          )}
          
        </div>
            </div>
          )
        }
      

        <h1 className="mt-2 text-base font-semibold">{title == 'suami' ?'Data Termohon (suami)' : title != 'istri' ? 'Data Termohon' : 'Data Penggugat (Istri)'}</h1>
        <div className="flex flex-col p-3 border-b-2 border-b-black gap-2">
          <select className="select select-bordered" onChange={(e) => setArea(e.target.value)}>
            <option disabled selected>
            Tempat tinggal {title == 'suami' || title == 'permohonan' ?'Termohon' : 'Tergugat'}
            </option>
            <option value='dalam-kabupaten'>Dalam Kabupaten Sumedang</option>
            <option value='luar-kabupaten'>Luar Kabupaten Sumedang</option>
          </select>

          {area == 'luar-kabupaten' ? (
            <input type="number" placeholder="Type here" className="input input-bordered w-full " />
          ) : ( 
            <select className="select select-bordered" onChange={(e)=> setRadiusTergugat(e.target.value)}>
            {
                dataKecamatan.map((kec,i)=> (
                  <option key={i} value={kec.radius}>{kec.kecamatan}</option>
                ))
              }
          </select>
          )}
        </div>
        <p className="text-sm text-gray-400 text-center">Perhatian: Kalkulator Panjar Biaya Perkara ini hanyalah alat bantu untuk mengetahui estimasi biaya panjar perkara. Informasi yang dihasilkan bukan data baku dan mungkin terdapat perbedaan.</p>
        <div className="flex justify-self-start mx-auto mt-2 gap-3">
        <Link to='/'><button className="btn btn-active text-white">Ke Halaman Utama</button></Link>
        <button className="btn btn-active btn-info text-white" onClick={handleHitungPanjar}>Hitung Biaya Pinjar</button>
        </div>
      </section>
    </Layout>
  );
};

export default Panjar;
