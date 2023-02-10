import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
//langsung destructure list
export default function Breadcrumb({ list }) {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {list?.map?.((item, index) => {
            const arias =
              index === list?.length ? { "aria-label": "current-page" } : {};
            return (
              <li key={item.url}>
                <Link to={item.url} {...arias}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
//menangkap props yg dikirim menggunakan proptypes untuk mengatur type propsnya
Breadcrumb.propTypes = {
  list: propTypes.array.isRequired, //props list dari comp. breadcrumb ini harus berbentuk array dan ditandai sbg required agar ngeload breadcrumb harus mengisi listnya
};
