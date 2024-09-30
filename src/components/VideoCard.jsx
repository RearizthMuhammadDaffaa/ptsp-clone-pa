import React from "react";

const VideoCard = () => {
  const gridStyle = "grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px] gap-2 ";
  return (
    <div className="flex justify-center items-center flex-wrap gap-2 mt-5">

      <div className="card bg-base-100 w-[350px] flex-row  h-[100px] shadow-xl">
        <figure>

          <img  src="https://img.youtube.com/vi/YHEZB-ITsuo/mqdefault.jpg" alt="" />
        </figure>
        <div className="card-body flex p-4">
          <p className="text-sm">Informasi Seputar Hak-hak Perempuan dan Anak Pasca Perceraian dari Dirjen Badilag</p>
        </div>
      </div>

      <div className=" card bg-base-100 w-[350px] flex-row  h-[100px] shadow-xl">
        <figure>

          <img  src="https://img.youtube.com/vi/R-s-so4zkfk/mqdefault.jpg" alt="" />
        </figure>
        <div className="card-body flex p-4">
          <p className="text-sm">Prosedur Berperkara Pengadilan Agama Sumber (Bahasa Indonesia)</p>
        </div>
      </div>
      <div className="card bg-base-100 w-[350px] flex-row  h-[100px] shadow-xl">
        <figure>

          <img  src="https://img.youtube.com/vi/YHEZB-ITsuo/mqdefault.jpg" alt="" />
        </figure>
        <div className="card-body flex p-4">
          <p className="text-sm">Informasi Seputar Hak-hak Perempuan dan Anak Pasca Perceraian dari Dirjen Badilag</p>
        </div>
      </div>
      <div className=" card bg-base-100 w-[350px] flex-row  h-[100px] shadow-xl">
        <figure>

          <img  src="https://img.youtube.com/vi/YHEZB-ITsuo/mqdefault.jpg" alt="" />
        </figure>
        <div className="card-body flex p-4">
          <p className="text-sm">Informasi Seputar Hak-hak Perempuan dan Anak Pasca Perceraian dari Dirjen Badilag</p>
        </div>
      </div>

    </div>
  );
};

export default VideoCard;
