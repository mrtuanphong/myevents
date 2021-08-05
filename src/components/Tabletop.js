import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
//https://docs.google.com/spreadsheets/d/1k5aMKFFg-sNGy1pwkFPai9Yl0v2iVV10Fs_n-Gnk3ek/edit?usp=sharing

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1k5aMKFFg-sNGy1pwkFPai9Yl0v2iVV10Fs_n-Gnk3ek",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  let formatTwoDigits = (digit) => ("0" + digit).slice(-2);
  let setNewDate = (input_date) => (new Date(input_date));
  let solarConverted = (input_date) => (input_date.getFullYear() + "" + (formatTwoDigits(input_date.getMonth()+1)) + "" + formatTwoDigits(input_date.getDate()));

  var tempDate = new Date();
  var date_today = `${tempDate.getFullYear()}${formatTwoDigits(tempDate.getMonth()+1)}${formatTwoDigits(tempDate.getDate())}`;
  //console.log(date_today);

  return (
    <>
      <div className="text-sm lg:text-base">
        <p className="text-center mb-5">
          Hôm nay, ngày {formatTwoDigits(tempDate.getDate())}/{formatTwoDigits(tempDate.getMonth()+1)}/{tempDate.getFullYear()}
        </p>
        <div className="container mx-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-2 align-bottom text-right w-8">#</th>
                <th className="p-2 align-bottom text-left">Ngày dương/âm</th>
                <th className="p-2 align-bottom text-left">Thứ</th>
                <th className="p-2 align-bottom text-left">Danh mục</th>
                <th className="p-2 align-bottom text-left">Thành viên</th>
                <th className="p-2 align-bottom text-right">Khu vực</th>
              </tr>
            </thead>
            <tbody>
            {data.map((item, i) => (
              <Fragment key={i}>
                <tr className={`border-b border-gray-300 ${item.status=='TRUE' ? 'bg-gray-200' : 'bg-white hover:bg-blue-100'}`}>
                  <td className="p-2 align-top text-right text-gray-500">
                    {i + 1}.
                    {/* <input type="checkbox" disabled className="ml-1 text-right" checked={item.status=='TRUE' ? 'checked' : ''} /> */}
                  </td>
                  <td className="p-2 align-top">
                    <div className="flex flex-col lg:flex-row">
                      <div className="font-semibold" title="Ngày dương">
                        {formatTwoDigits(setNewDate(item.solar).getDate())}/
                        {formatTwoDigits(setNewDate(item.solar).getMonth())}/
                        {setNewDate(item.solar).getFullYear()}
                        {/* {solarConverted(setNewDate(item.solar))} */}
                      </div>
                      {item.lunar &&
                        <div className="text-sm lg:pl-2 text-gray-500" title="Ngày âm">
                          ({item.lunar})
                        </div>
                      }
                    </div>
                    { parseInt(date_today) > parseInt(solarConverted(setNewDate(item.solar))) && <div className="text-xs text-gray-500">ĐÃ QUA</div>}
                    { parseInt(date_today) === parseInt(solarConverted(setNewDate(item.solar))) && <div className="text-xs text-green-600">HÔM NAY</div>}
                  </td>
                  <td className="p-2 align-top">{item.day}</td>
                  <td className="p-2 align-top">{item.category}</td>
                  <td className="p-2 align-top">{item.members}</td>
                  <td className="p-2 align-top text-right">{item.location}</td>
                </tr>
              </Fragment>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}