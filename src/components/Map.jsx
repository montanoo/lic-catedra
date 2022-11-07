import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/map.css";

export default function Map() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  return (
    <div className="container container-fluid overflow-hidden">
      <div className="w-75 m-auto w d-flex align-items-center p-2 mt-2">
        <svg
          version="1.2"
          viewBox="0 0 1000 549"
          xmlns="http://www.w3.org/2000/svg"
          className="map mt-5"
        >
          <Link
            to="ahuachapan"
            data-bs-toggle="tooltip"
            onClick={() => tooltip.hide()}
            data-bs-placement="top"
            data-bs-custom-className="custom-tooltip"
            data-bs-title="Ahuachapán"
          >
            <path
              d="M152.2 171.6l3.4 1.4 7.5 4.8 1.5 1.3 1.2 1.8 0.9 3.4 1 2 1.5 1.4 1.6 1.3 1.5 1.6 1.3 2.7-1.2 7.7-8.2 28.4-7.3 3.1-9.1 2.5-5 0.8-1.1 0.7-0.9 1.3-0.4 2.7-0.1 1.8 0.9 7.9 0.7 2.5 0.8 1.9 1.3 3-0.2 1.5-8.4 12.8-0.8 2.3-0.2 1.7 3.5 11 0.4 2.4-0.6 1.7-1.2 2-3.1 3.7-1.2 2.3-0.7 1.8-0.2 4-0.3 1-5.3 9.6-0.8 2-2.3 9.5-2.1 0.8-3.4 0.4-12.4-0.7-2.6-0.5-0.8-0.6-3-2.9-5.4-6.2-2.5-1.9-2.1-0.8-3.1-0.2-2.4 0.4-2.6 1.1-2.2 1.6-3 3.7-6.6 10.4-0.9 1.6-27.9-12.8-29.6-14.4-8.8-28.6-0.2-6.7 1-6.9 2.2-6.7 3.3-6.1 4.9-5.1 11.3-6.1 5.1-4.1 3.8-6 2.7-6.1 3.5-6 6.1-5.4 39.6-27.9 8.8-8.8 4.4-2.9 18.3-7 6-0.4 7.5 2 10.7 8.3 6.1 2.5 6-3.2 0.2-2.4-0.3-0.7z"
              id="SLV1343"
              name="Ahuachapán"
              className="two"
            ></path>
          </Link>
          <Link
            to="cabañas"
            data-bs-toggle="tooltip"
            onClick={() => tooltip.hide()}
            data-bs-placement="top"
            data-bs-custom-className="custom-tooltip"
            data-bs-title="Cabañas"
          >
            <path
              d="M667.8 254l-2.5 2.3 2.5 5.3-0.6 5-2.9 4.3-4.4 2.8 0.9 5.9-3.9 5.9-3.8 7.4 0.1 0.1-6.7 4.5-3.9-1-10.4-1.3-1.5-0.5-0.8-0.7-0.9-2-0.5-2.3-0.6-1-1.1-0.6-2.9-0.7-1-0.5-2.7-1.6-4.4-1.6-1-0.5-7.6-5.6-0.9-0.5-4.6-0.8-5.6-0.3-2.7-0.5-13.2 0.1-2.9-0.3-2-0.5-5.9-4.3-1.4 0.1-1.5 0.8-2 2.8-1.4 1.4-1.4 0.9-2.4-0.2-3-0.7-2.7 0.7-12.8 5.7-4 1.3-2.8 0.5-4.3-1.5-2.4-0.5-2.7-0.1-1.1 1.5-0.8 1.3-0.6 12.2-14.2-3.9-3.7-2.1-0.4-1.1-2.7-4.1-4-4.2-1.7-2.3-0.9-1.9-0.6-2.7-0.5-1.7-2.1-3.6-0.5-1.8-0.3-1.9-1.5-3.3-2-2.3-3.3-2.3-2.6-2.7-8-11.4-2-3.7-1-2.7 0.2-1.3 0.8-2.1 1.2-1.7 0.9-0.6 5.5-3.2 1.5-1.3 1.4-1.5 1.7-2.8 6.1-9.7 12.1-0.3 10.8 1 5.7-1.4 6.2-2.4 25.3-8.4 4.9-2.2 2.8-2.2 3.1-4.2 8.6-4.1 19-2.9-0.1 0.7 2.5-1 10.5-1.6 10.5 0.7 31.2 10 18.2 1.4 4 1.7 3.7 3.6-0.5 2.4-0.5 0.5-1.9-0.2 2.6 5.6-0.3 5-1.4 5.2-0.9 6.2 1.2 4.1 4.5 11.1 0.2 6.9-3.6 6z"
              id="SLV1344"
              name="Cabañas"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            to="cuscatlan"
            onClick={() => tooltip.hide()}
            data-bs-custom-className="custom-tooltip"
            data-bs-title="Cuscatlán"
          >
            <path
              d="M489.4 212.8l-6.1 9.7-1.7 2.8-1.4 1.5-1.5 1.3-5.5 3.2-0.9 0.6-1.2 1.7-0.8 2.1-0.2 1.3 1 2.7 2 3.7 8 11.4 2.6 2.7 3.3 2.3 2 2.3 1.5 3.3 0.3 1.9 0.5 1.8 2.1 3.6 0.5 1.7 0.6 2.7 0.9 1.9 1.7 2.3 4 4.2 2.7 4.1 0.4 1.1 3.7 2.1 14.2 3.9-7.5 20.2-1.4 5.9-1 2-0.9 1.4-8 7.9-2.9 1.7-2.3 0.8-5.1 0.7-2.1 0.8-0.6 0.8-0.9 2-0.7 0.8-1.7 0.7-3.2 0.3-7.8-2.5-7.1-3.8-18.2-6.7-0.3-12.8-0.9-2.1-0.8-2.3-2-2.5-7.1-13.7-0.7-2 0.7-9.2-0.3-1.8-0.8-1.2-1-0.4-1.6-1.1-1.7-1.7-5.2-7.7-0.8-0.6-2.3-0.7-2.6-0.1-2.9-2.4-3.8-4.3-10.9-17.3-1.2-3.3 0.8-0.7 2.9-1.3 1.1-0.8 0.8-0.8 0.7-1.6-0.3-1-2.6-3.2-8.5-14.1-4-8.1-0.8-3.2-0.5-3.7 0.3-0.6 2.2-1.9 1-1.7 0.7-2.2 0.3-2.5 0.6-2.4 0.3-2.9-0.3-4.1-1.3-7-0.2-1.9 0.5-1.4 1.9-4 1.9-5.1 0.2-4.1 7.3-3.8 2.7 0.1 5.1 2.7 10.6 3.8 2.1 1.1 3 2.7 7 5 0.6 0.8 1.9 3.3 9 10.8 0.8 1.2 0.1 0.8-0.3 1.8 0 1.1 0.4 2.2 0.7 1.9 1.1 2.4 2.2 3.2 1.9 1.7 1.5 1 8.9 4.2 7.4-0.6 6.4 2.5 6.8 0.7z"
              id="SLV1345"
              name="Cuscatlán"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={() => tooltip.hide()}
            data-bs-custom-className="custom-tooltip"
            data-bs-title="La Libertad"
          >
            <path
              d="M350.3 168.5l-0.5 14.3-2.2 9.2-0.1 2.3 0.3 1.5 2.5 1.9 1 1.5 1.1 2.2 2.1 4.9 1.2 2.2 1.2 1.6 1.7 1.1 1.9 0.9 3.4 1.1 1.2 0 3.8-0.3 2.5 0.2 2.3 0.7 1.4 0.8 1.5 1.2 2.2 1.2 0.6 0.9 0.2 0.7-1.1 2.8-0.7 2.9-0.4 0.3-3-0.1-1.1 0.3-0.8 0.7-0.4 1.4-2.1 23.7-0.6 2.4-0.4 1-0.9 0.6-2.1 0.8-1.7 1.2-1.3 1.6-0.8 2-0.5 2-0.8 7.5-0.8 3.2-1.4 3.2-0.7 3.9-0.5 6.8-0.7 2.9-2.8 5.3-1.8 5.3 0.1 1.7 0.7 0.9 2.4 0.4 2.1 2.7-0.4 4.3 0.3 4 0.4 1.1 1.3 1.7 1.6 1.2 0.7 1 0.5 1.4 0.8 3.3 0.6 1.9 0.8 1.2 0.9 0.7 5.9 3.2 2.5 2 2.8 3.7 0.4 1.6-0.2 1.4-1.3 2.5-1 2.3 0.1 1.3 0.9 1 3.1 1.5 0.5 1-0.2 1-1.5 1.5-0.6 2.4-0.3 4 0.8 17.5-0.2 1.4-2.6 6.7-0.9 3.6-0.2 2 0.3 1.6 6.6 10.7 2.3 5 0.6 0.9 0.9 0.5 2.5 0.1 2.4-0.6 4.3-1.4 2.4-0.3 2.6 0.5 3 1.3 1.5 6.9 1.2 1.8 2.7 0.1 2.3 0.5 4.1 1.7 1.3 1.4 0.3 1.2-1 1.8-2 2.5-1.2 1.7-3.2 5.7-1.1 2.5-1.3 4-19.7-12.2-28-12.4-30.3-7.2-14 0-10.7-2.5-58.6 0.4-25-6.2-8.9-1.8 5.5-12.7 2.2-3.5 10.4-9.2 1.8-2.1 1.1-1.7 0.6-5.1 0.7-3.6 1-2.1 1-1.3 1.6-1.4 9-9.1 2.1-2.7 1.1-2.1 0.1-1.4-0.6-9.4 0.7-4.9 1.2-5 0.9-2.3 0.9-1.6 0.8-0.8 1.7-1 1-0.2 2.8-0.3 1.7-0.7 1.6-1.3 4.9-6 2.2-2.1 6.1-3.6 2.6-1.8 3-2.7 1.1-1.6 0.6-1.6-0.2-1.2-1-1.9-1.6-1.3-1-0.5-4.7-1.5 1.9-11.8 7.3-19.8 0.7-9.1-0.3-7.6 0.5-11.4 0.5-2.4 0.7-0.8 0.9-0.6 1-0.2 2.1 0.4 1.1-0.2 1.4-0.9 3.3-5.3 0.9-0.4 4-0.2 2.1-1 0.9-1.1 0.5-1.3 0.6-8.2-0.1-1.3 0.7-6.2 4.5-23.5 1.8-2.9 1.3-2.9 3.4-1.3 4.9-1 3.7-2 4.1-3.1 4.2 0.9 7.5 4.2 6.7 1 1.3 0.4 4 1.8z"
              id="SLV1346"
              name="La Libertad"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            to="la-paz"
            onClick={() => tooltip.hide()}
            data-bs-custom-className="custom-tooltip"
            data-bs-title="La Paz"
          >
            <path
              d="M503.3 334.1l3.1 8.4 0.1 7-0.5 7.1 0.5 2.9 0.8 1.7 1.2 0.2 2.6-0.2 9.9-3.1 1.7-0.1 1.9 0.3 3.2 1.2 1.1 1.4 10.2 21.8 0.4 2.5 0 2.7-0.6 2.4-3.1 8.7-0.6 2-2 11.4-0.1 2 0.6 7.4 0.6 2.4 0.6 1.7 2.7 3 2.5 2 3.6 2.2 2.8 2.7 2.7 3.5 1 2.2 0.4 1.8-0.2 1.3-0.5 2.4-0.9 2-2.5 1.9-1.2 1.7-0.4 1.1-0.2 2.6 1.9 17.3-0.2 2.4-0.5 1-1.5 1.6-0.8 0.6-3.8 1.9-3.1 1.2-1.8 1-1.6 1.3-1.2 1.7-0.9 2.1-0.3 1.2-1.1 12.8-96.1-44.9-29.2-18 1.3-4 1.1-2.5 3.2-5.7 1.2-1.7 2-2.5 1-1.8-0.3-1.2-1.3-1.4-4.1-1.7-2.3-0.5-2.7-0.1-1.2-1.8-1.5-6.9 0.9-3.5 1.2-0.8 3-3.3 2.1-4.6 3.5-10.5 0.9-4.6 0.3-2.9-0.8-2.1-3.2-5.6-1.2-3.4-0.8-3.7 0.2-2 0.6-1.3 0.9-0.5 1.1-0.3 2.6 0.2 6.6 2.2 2.5 0.3 2.1-1.7 12.4-15.8 14.9-14.1 18.2 6.7 7.1 3.8 7.8 2.5 3.2-0.3 1.7-0.7 0.7-0.8 0.9-2 0.6-0.8 2.1-0.8 5.1-0.7 2.3-0.8 2.9-1.7z"
              id="SLV1347"
              name="La Paz"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={() => tooltip.hide()}
            data-bs-custom-className="custom-tooltip"
            data-bs-title="Sonsonate"
          >
            <path
              d="M272.2 286.3l4.7 1.5 1 0.5 1.6 1.3 1 1.9 0.2 1.2-0.6 1.6-1.1 1.6-3 2.7-2.6 1.8-6.1 3.6-2.2 2.1-4.9 6-1.6 1.3-1.7 0.7-2.8 0.3-1 0.2-1.7 1-0.8 0.8-0.9 1.6-0.9 2.3-1.2 5-0.7 4.9 0.6 9.4-0.1 1.4-1.1 2.1-2.1 2.7-9 9.1-1.6 1.4-1 1.3-1 2.1-0.7 3.6-0.6 5.1-1.1 1.7-1.8 2.1-10.4 9.2-2.2 3.5-5.5 12.7-2.9-0.5-26.1-8.7-13.8 2.9-39.1 0.5-6.3-4.4-4.1-15.6-1.6-9.7-5.1-4.3-8.5-5.3-33.4-19-0.9-0.4 0.9-1.6 6.6-10.4 3-3.7 2.2-1.6 2.6-1.1 2.4-0.4 3.1 0.2 2.1 0.8 2.5 1.9 5.4 6.2 3 2.9 0.8 0.6 2.6 0.5 12.4 0.7 3.4-0.4 2.1-0.8 2.3-9.5 0.8-2 5.3-9.6 0.3-1 0.2-4 0.7-1.8 1.2-2.3 3.1-3.7 1.2-2 0.6-1.7-0.4-2.4-3.5-11 0.2-1.7 0.8-2.3 8.4-12.8 0.2-1.5-1.3-3-0.8-1.9-0.7-2.5-0.9-7.9 0.1-1.8 0.4-2.7 0.9-1.3 1.1-0.7 5-0.8 9.1-2.5 7.3-3.1 9.6 2.4 3.7-0.1 2.2-0.6 2.6-0.2 1.9 1 2.4 1.7 6.7 6.6 1.2 1.7 1.3 3 2.2 2.7 2.5 2.3 1.9 3 0.4 2.2-0.4 2.4-1.2 1.7-1.6 1.3-1.2 1.7-0.1 1.1 0.5 0.9 1.3 0.9 2.6 0.4 1.9 2 1 1.4 1 2.3 1.6 1.5 1.3 0.5 1.9 0.4 3-0.7 1.5-0.7 0.9-1 0.3-1 0-3.8 0.5-2.4 1.3-3 1.1-1.8 1.5-1.4 1.2-0.2 2.8 1.2 3.9 2.4 8.8 6.5 5.4 5.1 2.5 6.3 1.2 1.7 5.3 1.8 19.6 3.7z"
              id="SLV1348"
              name="Sonsonate"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={() => tooltip.hide()}
            data-bs-custom-className="custom-tooltip"
            data-bs-title="San Salvador"
          >
            <path
              d="M402.2 162.2l-0.2 4.1-1.9 5.1-1.9 4-0.5 1.4 0.2 1.9 1.3 7 0.3 4.1-0.3 2.9-0.6 2.4-0.3 2.5-0.7 2.2-1 1.7-2.2 1.9-0.3 0.6 0.5 3.7 0.8 3.2 4 8.1 8.5 14.1 2.6 3.2 0.3 1-0.7 1.6-0.8 0.8-1.1 0.8-2.9 1.3-0.8 0.7 1.2 3.3 10.9 17.3 3.8 4.3 2.9 2.4 2.6 0.1 2.3 0.7 0.8 0.6 5.2 7.7 1.7 1.7 1.6 1.1 1 0.4 0.8 1.2 0.3 1.8-0.7 9.2 0.7 2 7.1 13.7 2 2.5 0.8 2.3 0.9 2.1 0.3 12.8-14.9 14.1-12.4 15.8-2.1 1.7-2.5-0.3-6.6-2.2-2.6-0.2-1.1 0.3-0.9 0.5-0.6 1.3-0.2 2 0.8 3.7 1.2 3.4 3.2 5.6 0.8 2.1-0.3 2.9-0.9 4.6-3.5 10.5-2.1 4.6-3 3.3-1.2 0.8-0.9 3.5-3-1.3-2.6-0.5-2.4 0.3-4.3 1.4-2.4 0.6-2.5-0.1-0.9-0.5-0.6-0.9-2.3-5-6.6-10.7-0.3-1.6 0.2-2 0.9-3.6 2.6-6.7 0.2-1.4-0.8-17.5 0.3-4 0.6-2.4 1.5-1.5 0.2-1-0.5-1-3.1-1.5-0.9-1-0.1-1.3 1-2.3 1.3-2.5 0.2-1.4-0.4-1.6-2.8-3.7-2.5-2-5.9-3.2-0.9-0.7-0.8-1.2-0.6-1.9-0.8-3.3-0.5-1.4-0.7-1-1.6-1.2-1.3-1.7-0.4-1.1-0.3-4 0.4-4.3-2.1-2.7-2.4-0.4-0.7-0.9-0.1-1.7 1.8-5.3 2.8-5.3 0.7-2.9 0.5-6.8 0.7-3.9 1.4-3.2 0.8-3.2 0.8-7.5 0.5-2 0.8-2 1.3-1.6 1.7-1.2 2.1-0.8 0.9-0.6 0.4-1 0.6-2.4 2.1-23.7 0.4-1.4 0.8-0.7 1.1-0.3 3 0.1 0.4-0.3 0.7-2.9 1.1-2.8-0.2-0.7-0.6-0.9-2.2-1.2-1.5-1.2-1.4-0.8-2.3-0.7-2.5-0.2-3.8 0.3-1.2 0-3.4-1.1-1.9-0.9-1.7-1.1-1.2-1.6-1.2-2.2-2.1-4.9-1.1-2.2-1-1.5-2.5-1.9-0.3-1.5 0.1-2.3 2.2-9.2 0.5-14.3 2.9 0.4 1.7-0.8 5.4-3.9 3.1-1.1 8.6 3.8 5.7 0 2.6-5.3 5.8 4.7 4.7 1.1 11.4-5.2z"
              id="SLV1349"
              name="San Salvador"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={() => tooltip.hide()}
            data-bs-custom-className="custom-tooltip"
            data-bs-title="La Unión"
          >
            <path
              d="M997.4 539.8l1.6 4.3-3.5 1.9-5.3-1.9-3.5 1.6 0-4.6-2.2-4.6 0.9-5.4-0.4-5.4 3-2.1 5.7 1.9 3.5 7.8 0.2 6.5z m-24.8-18.1l-2.7 2.7-5.4-4.9-1.3-6.7 2.4-2.4 3.5-0.3 3.2 1.9 2.7 6.2-2.4 3.5z m-137.7 20.3l2.2-33.2 0.6-3.3 1.1-4.2 0.8 0.4 3.4 2.5 3.6 2.2 4.3 1.5 1.3 0.3 1.4 0 1.9-0.6 1-1 5.4-17.7 0.3-2.6-0.7-2.4-0.1-1.8 5.3-30.5-0.2-1-0.8-2.1-3.9-6.2-0.9-2.1-1.2-7.5-0.2-10.8 0.4-2.8 0.6-1.7 0.8-0.6 1.8-1 2.2-1.8 1.6-1.9 0.4-1.4 0-1.4-1.6-6.1-0.2-12.9 0.8-5.3 2.7-3.7 12.8-13.7 3-4.6 0.7-8 9.5-24.5 2.4-11.4 1.3-9.9 0.1-8.1-0.4-2.6-0.8-2-0.5-1-1.9-2.4-0.5-0.9-0.4-2.5 1.7-25.8-0.8-12-1.8-7-1.3-8.3 2.3 0.5 6.1 4 2.8 0.8 1.9-1 5.3-4.1 3.2-1.1 4.1 0.3 8.1 1.6 4-0.2 4-2.9 3.4-4.3 4.1-3.5 6.2-0.2 3.9 3 4 11.2 3.4 5.1 2.1 1.3 5.8 2.2 2.5 1.4 18.2 15.7 7.2 3-3.7 6.1-8.3 19.3-2.1 7 2.7 7-2.1 4.6-4.1 3.9-3.6 5.2-1.5 7.5 0.4 15.8-1 7.7-9.9 24-2.4 11.7 4.3 9.7 4.3 1.6 8.7-2.9 6 2.3 3.2 3.7 2.1 5.1 0.7 5.7-0.9 5.4-7.1 8.1-32.5 14.9-3.5-2-2.1-3.5-3.1-9.1-11.6 20.2-3 12 7.6 5.2 4.8 1.9 13.7 13.2 7.8 5.2 0.6 2.5 0 5.2-3.3 9-8.2 6.5-30.7 15.5-8.3 6.6-1.4 6.8 9.5 6.6-14.6 3.4-56.8-3.9-10.4-2.1z"
              id="SLV1350"
              name="La Unión"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={() => tooltip.hide()}
            data-bs-custom-className="custom-tooltip"
            data-bs-title="Morazán"
          >
            <path
              d="M892.1 236.6l1.3 8.3 1.8 7 0.8 12-1.7 25.8 0.4 2.5 0.5 0.9 1.9 2.4 0.5 1 0.8 2 0.4 2.6-0.1 8.1-1.3 9.9-2.4 11.4-9.5 24.5-0.7 8-3 4.6-12.8 13.7-8.8-1.5-4.3 0.3-16.1 5-3.1 0.3-2-0.3-0.6-0.7-1.1-2-0.9-1.1-1.4-1.3-6.1-3.7-0.9-0.6-1.1-1.8-1.1-7.6-0.7-2.3-1.5-2.8-1.8-2.3-1.5-1-1.5-0.5-16 1.3-2.3 0.5-2.1 0.8-3.3 2-2.3 0.7-0.7-0.5 0-0.8 0.5-0.9 2.4-3.3 0.4-1 0.1-1.1-0.6-1.1-1-0.9-2.9-1.9-1.6-1.6-0.7-2.2-0.2-1.2-0.8-1.7-1.5-2-4-2.9-1.5-1.5-0.7-2.6-1.4-2.1-5.2-4.7-2.2-2.5-1.2-1.9-0.7-10.7 0-1.1 1.2-1.7 13.5-9.8 1.9-1 3.2-1.2 1.7-1.3 0.7-0.8 0.3-1.2 0-1.6-0.7-2.5-1.1-1.7-1-1-15.5-10.7-2.4-2.1-1.5-1.6-0.6-2.2-0.2-4.1 0.4-2.4 0.5-1.5 1.7-2.4 1.6-1.3 1.4-1.6 0.8-2 0.3-1.2-0.1-2.5-1.3-3.6-1.6-3.2-0.7-1.8-0.1-1.4-0.7-3.4-4.9-11.5-2.2-3.1 1.6-3 2.7-3 5-2.1 3.6 0.6 2.6-0.6 2-5.8-0.7-1.2-3.7-3.4-0.9-1.5-0.4-8.4 0.2-1.5 4.1-1.5 6.2 0.7 10.9 2.4 6.6 0.2 21.5-2.6 10.8 0.6 4.8 4 6 15.7 6 7.2 7.6 7 6.7 8.1 3.4 10.5 18.8-9.4 6.2-1.7 0.9 0.2z"
              id="SLV1351"
              name="Morazán"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={() => tooltip.hide()}
            data-bs-custom-className="custom-tooltip"
            data-bs-title="San Miguel"
          >
            <path
              d="M869 381.3l-2.7 3.7-0.8 5.3 0.2 12.9 1.6 6.1 0 1.4-0.4 1.4-1.6 1.9-2.2 1.8-1.8 1-0.8 0.6-0.6 1.7-0.4 2.8 0.2 10.8 1.2 7.5 0.9 2.1 3.9 6.2 0.8 2.1 0.2 1-5.3 30.5 0.1 1.8 0.7 2.4-0.3 2.6-5.4 17.7-1 1-1.9 0.6-1.4 0-1.3-0.3-4.3-1.5-3.6-2.2-3.4-2.5-0.8-0.4-1.1 4.2-0.6 3.3-2.2 33.2-2.9-0.5-2.8 0-3 1.2-25.3-29.5-1.1-0.4-2.4-0.3-11.2 1.7-1-0.2-0.8-0.8-0.1-2.1 0.7-2.8 3.1-5.6-0.3-1.2-0.9-1.3-2.7-1.5-1.6-1.3-1-1.5-0.1-6.3-0.1-1.2-0.4-1.3-0.7-1.3-1.3-1.5-1.8-0.2-1.3 0.2-3.9 2-2 0.9-2.4 0.4-2.2-0.6-3.3-2.5-1-0.4-2.3 0-1.2-0.8-1.7-1.7-3.6-4.3-2.1-1.8-1.9-1-8.1-1-2.2-0.5-3.1-1.4-1.6-1.2-2.9-3.7-4.1-6.7-2.3-4.5-2.2-7.6-0.6-3.3-0.2-2.5 0.1-2.7-0.3-1.3-0.6-1.1-1.7-0.6-1.9 0.7-0.7 0-0.6-0.5-0.5-1.3-1.3-7.9-0.1-2.7-0.7-5.7 0.1-2.5 0.3-1.1 0.7-0.8 1.3 0 1.7 1.6 0.8 0.1 0.6-0.7 0.4-1.1 0.1-2.6 0-2.6 0.5-2.4 1.2-1.8 2.2-2 0.5-1.2 0.2-1-0.2-1.6-1.7-5.6-0.3-2.2 0-1.7 0.9-3.3 0-1.1-0.6-1.5-5-10.6-0.4-2.4-0.1-2.5 0.2-1.3 0.8-2 0.6-0.8 1-0.5 2.2-0.7 1-0.5 1.2-1.6 0.4-1.1 0.2-1.1-0.2-1.6-0.6-1.7-1.1-3-0.8-3.6 0.2-2.5 2-5.5 0-1.2-1.4-1.1-2.5-0.8-10.1-1.2-3.2-1.1-3.5-2.6-2.9-2.7-3.4-5.4-2.5-3.2-5-0.3-16.8 1.9-4.7-7.4-12.7-12.8-1.1-10-0.1-0.1 3.8-7.4 3.9-5.9-0.9-5.9 4.4-2.8 2.9-4.3 0.6-5-2.5-5.3 2.5-2.3 11-0.6 7.7-4.7 7.5-3.2 16.6-3.7 4 0.2 6.5 2.6 3 0.4 0.5-1.3 0-2.5 0.3-2.6 1.3-1.5 2.7-0.2 3.3 0.6 3.3 0.9 2.6 1.2 2.9-5.4 4.4-1.6 5-0.4 4.5-1.5 3.3-3.2 1.4-2.4 2.2 3.1 4.9 11.5 0.7 3.4 0.1 1.4 0.7 1.8 1.6 3.2 1.3 3.6 0.1 2.5-0.3 1.2-0.8 2-1.4 1.6-1.6 1.3-1.7 2.4-0.5 1.5-0.4 2.4 0.2 4.1 0.6 2.2 1.5 1.6 2.4 2.1 15.5 10.7 1 1 1.1 1.7 0.7 2.5 0 1.6-0.3 1.2-0.7 0.8-1.7 1.3-3.2 1.2-1.9 1-13.5 9.8-1.2 1.7 0 1.1 0.7 10.7 1.2 1.9 2.2 2.5 5.2 4.7 1.4 2.1 0.7 2.6 1.5 1.5 4 2.9 1.5 2 0.8 1.7 0.2 1.2 0.7 2.2 1.6 1.6 2.9 1.9 1 0.9 0.6 1.1-0.1 1.1-0.4 1-2.4 3.3-0.5 0.9 0 0.8 0.7 0.5 2.3-0.7 3.3-2 2.1-0.8 2.3-0.5 16-1.3 1.5 0.5 1.5 1 1.8 2.3 1.5 2.8 0.7 2.3 1.1 7.6 1.1 1.8 0.9 0.6 6.1 3.7 1.4 1.3 0.9 1.1 1.1 2 0.6 0.7 2 0.3 3.1-0.3 16.1-5 4.3-0.3 8.8 1.5z"
              id="SLV1352"
              name="San Miguel"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-custom-className="custom-tooltip"
            data-bs-title="San Vicente"
            onClick={() => tooltip.hide()}
          >
            <path
              d="M653.2 293l1.1 10 12.7 12.8 4.7 7.4-25.9 19-2.3 7.4-6.1 8.5-8.3 5.3-9.1-2.1-11.9 14.7-0.5 2.7-6.8 1.1-2.3 3.4-1 12.9-3.5 12.5-18.8 35.9-1.7 4.5-1 5.4-0.5 13.2-1.1 2.9-7.2 7-3.8 5.7-2.5 4.7-3.9 3.1-8.1 1.2-4.9 1.9-3.1 4.2-1.6 6 0 0.9-6-2.8 1.1-12.8 0.3-1.2 0.9-2.1 1.2-1.7 1.6-1.3 1.8-1 3.1-1.2 3.8-1.9 0.8-0.6 1.5-1.6 0.5-1 0.2-2.4-1.9-17.3 0.2-2.6 0.4-1.1 1.2-1.7 2.5-1.9 0.9-2 0.5-2.4 0.2-1.3-0.4-1.8-1-2.2-2.7-3.5-2.8-2.7-3.6-2.2-2.5-2-2.7-3-0.6-1.7-0.6-2.4-0.6-7.4 0.1-2 2-11.4 0.6-2 3.1-8.7 0.6-2.4 0-2.7-0.4-2.5-10.2-21.8-1.1-1.4-3.2-1.2-1.9-0.3-1.7 0.1-9.9 3.1-2.6 0.2-1.2-0.2-0.8-1.7-0.5-2.9 0.5-7.1-0.1-7-3.1-8.4 8-7.9 0.9-1.4 1-2 1.4-5.9 7.5-20.2 0.6-12.2 0.8-1.3 1.1-1.5 2.7 0.1 2.4 0.5 4.3 1.5 2.8-0.5 4-1.3 12.8-5.7 2.7-0.7 3 0.7 2.4 0.2 1.4-0.9 1.4-1.4 2-2.8 1.5-0.8 1.4-0.1 5.9 4.3 2 0.5 2.9 0.3 13.2-0.1 2.7 0.5 5.6 0.3 4.6 0.8 0.9 0.5 7.6 5.6 1 0.5 4.4 1.6 2.7 1.6 1 0.5 2.9 0.7 1.1 0.6 0.6 1 0.5 2.3 0.9 2 0.8 0.7 1.5 0.5 10.4 1.3 3.9 1 6.7-4.5z"
              id="SLV1353"
              name="San Vicente"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-custom-className="custom-tooltip"
            data-bs-title="Usulután"
            onClick={() => tooltip.hide()}
          >
            <path
              d="M826.2 542.7l-3.9 1.5-35.6 3-38.1-5.8-10 3.2-5.2-1.8-6-1.3 0-2.7 9.3-0.6 0.6-6.5-4.9-8.1-7.6-5.3 1.7 3.3 4.9 6.9 1.9 4.3-14.9-0.5-7.3 0.7-6.2 2.7 4 1.7 3.2-0.5 3.9-1.1 5.8-0.1 0 3.1-9.6 4-10.6-0.3-8.3-5.1-2.5-10.4 4.1 1.8 1.5 1.1 5.7-5.8 0-2.6-7.1-3.2-7.7-11-5.2-3.2 1.4 6.1 2.3 5 1.2 4.5-1.8 4.4-6-3.4-17.4-4.4-7.6-4.1-6.8-12.2-3.2-2-4.8-0.4-13.6-2.7-6 0-16.7 3.1-23.3 0.7-5.1 2.2 2.8 2.3 3 1.6 3 0.5 2.7-1.2 11.6 2.7 33.1-3.6 3.7 0.6 5.3 2.9 2.9 2.7 5.1 6.3 3.5 2.6 0 3.2-7.7-1.3-5.6-1.1-12.3-3.7 0 2.9 33.8 7 17.6 5.7 8 7.8-2.9 5.1-7.4-1.2-8.2-4.4-5.4-4.1-6.1-3.1-106.4-19.8-13-6.1 0-0.9 1.6-6 3.1-4.2 4.9-1.9 8.1-1.2 3.9-3.1 2.5-4.7 3.8-5.7 7.2-7 1.1-2.9 0.5-13.2 1-5.4 1.7-4.5 18.8-35.9 3.5-12.5 1-12.9 2.3-3.4 6.8-1.1 0.5-2.7 11.9-14.7 9.1 2.1 8.3-5.3 6.1-8.5 2.3-7.4 25.9-19 16.8-1.9 5 0.3 2.5 3.2 3.4 5.4 2.9 2.7 3.5 2.6 3.2 1.1 10.1 1.2 2.5 0.8 1.4 1.1 0 1.2-2 5.5-0.2 2.5 0.8 3.6 1.1 3 0.6 1.7 0.2 1.6-0.2 1.1-0.4 1.1-1.2 1.6-1 0.5-2.2 0.7-1 0.5-0.6 0.8-0.8 2-0.2 1.3 0.1 2.5 0.4 2.4 5 10.6 0.6 1.5 0 1.1-0.9 3.3 0 1.7 0.3 2.2 1.7 5.6 0.2 1.6-0.2 1-0.5 1.2-2.2 2-1.2 1.8-0.5 2.4 0 2.6-0.1 2.6-0.4 1.1-0.6 0.7-0.8-0.1-1.7-1.6-1.3 0-0.7 0.8-0.3 1.1-0.1 2.5 0.7 5.7 0.1 2.7 1.3 7.9 0.5 1.3 0.6 0.5 0.7 0 1.9-0.7 1.7 0.6 0.6 1.1 0.3 1.3-0.1 2.7 0.2 2.5 0.6 3.3 2.2 7.6 2.3 4.5 4.1 6.7 2.9 3.7 1.6 1.2 3.1 1.4 2.2 0.5 8.1 1 1.9 1 2.1 1.8 3.6 4.3 1.7 1.7 1.2 0.8 2.3 0 1 0.4 3.3 2.5 2.2 0.6 2.4-0.4 2-0.9 3.9-2 1.3-0.2 1.8 0.2 1.3 1.5 0.7 1.3 0.4 1.3 0.1 1.2 0.1 6.3 1 1.5 1.6 1.3 2.7 1.5 0.9 1.3 0.3 1.2-3.1 5.6-0.7 2.8 0.1 2.1 0.8 0.8 1 0.2 11.2-1.7 2.4 0.3 1.1 0.4 25.3 29.5z"
              id="SLV1354"
              name="Usulután"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-custom-className="custom-tooltip"
            data-bs-title="Chalatenango"
            onClick={() => tooltip.hide()}
          >
            <path
              d="M587.9 185.7l-19 2.9-8.6 4.1-3.1 4.2-2.8 2.2-4.9 2.2-25.3 8.4-6.2 2.4-5.7 1.4-10.8-1-12.1 0.3-6.8-0.7-6.4-2.5-7.4 0.6-8.9-4.2-1.5-1-1.9-1.7-2.2-3.2-1.1-2.4-0.7-1.9-0.4-2.2 0-1.1 0.3-1.8-0.1-0.8-0.8-1.2-9-10.8-1.9-3.3-0.6-0.8-7-5-3-2.7-2.1-1.1-10.6-3.8-5.1-2.7-2.7-0.1-7.3 3.8-11.4 5.2-4.7-1.1-5.8-4.7-2.6 5.3-5.7 0-8.6-3.8-3.1 1.1-5.4 3.9-1.7 0.8-2.9-0.4-4-1.8-1.3-0.4-6.7-1-7.5-4.2-4.2-0.9-4.1 3.1-3.7 2-4.9 1-3.4 1.3-1.3 2.9-1.8 2.9-4.9 1.3-6.1 0-6.2-1.1-4.6-4.3-1.2-9.1 7.9-27.3 7.7 0.5 2-0.9 0.8-0.8 1-1.4 4.8-8.8 1.6-1.3 1-0.4 2.2-0.5 4.3-0.3 1.3-0.2 2.1-0.7 1.8-1.2 1.4-1.4 8-11.1 0.8-2 0.2-1.6-0.4-4.7 0-8.6 15.4-6.2 3.6-4.1 1.6-8.6 5.3-15.4-7.5-4.8-2-2.6-0.9-0.8-6.1-3.2-1.5-1.2-0.9-0.9-1.8-3.1-1.4-3.2-0.5-0.8-2.7-3.1-15.8-14.7 16 2.5 12.8 6.1 21 4.6 10.4 7.4 19.1 5.7 3.9-3.6 5.9-11.5 3.3-3.4 3.6-1 2.4 0.5 2.1 1.9 2.3 3.2 2.1 3.9 0.9 4.2-0.4 4.3-1.6 4.2 4.7 4.1 14 1.7 6.6 3.3 2.7 5.2 1.6 13.1 1.9 3.8 10.4 8 3.8 4.6 3.7 6.3 1.6 5.3 0.6 5.5 1.3 4.5 3.7 2.7 4-0.9 4.9-2.9 5.7-2.5 6.5 0.1 10.2 6.6 8.6 10.9 6.2 12.7 2.7 12 7.2-1 18.1 1.3 4.9-1.9 4.3-2.6 3.6-0.4 2.9 4.8-0.3 7.2-2.5 7.1-0.3 5.9 6.5 4.3 8.8 1.2 2 0.7 2.9 2.6 2.1 2.8 0.9 3.6-0.1 2.2z"
              id="SLV1357"
              name="Chalatenango"
              className="two"
            ></path>
          </Link>
          <Link
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            to="santa-ana"
            data-bs-custom-className="custom-tooltip"
            data-bs-title="Santa Ana"
            onClick={() => tooltip.hide()}
          >
            <path
              d="M317.7 14.8l15.8 14.7 2.7 3.1 0.5 0.8 1.4 3.2 1.8 3.1 0.9 0.9 1.5 1.2 6.1 3.2 0.9 0.8 2 2.6 7.5 4.8-5.3 15.4-1.6 8.6-3.6 4.1-15.4 6.2 0 8.6 0.4 4.7-0.2 1.6-0.8 2-8 11.1-1.4 1.4-1.8 1.2-2.1 0.7-1.3 0.2-4.3 0.3-2.2 0.5-1 0.4-1.6 1.3-4.8 8.8-1 1.4-0.8 0.8-2 0.9-7.7-0.5-7.9 27.3 1.2 9.1 4.6 4.3 6.2 1.1 6.1 0 4.9-1.3-4.5 23.5-0.7 6.2 0.1 1.3-0.6 8.2-0.5 1.3-0.9 1.1-2.1 1-4 0.2-0.9 0.4-3.3 5.3-1.4 0.9-1.1 0.2-2.1-0.4-1 0.2-0.9 0.6-0.7 0.8-0.5 2.4-0.5 11.4 0.3 7.6-0.7 9.1-7.3 19.8-1.9 11.8-19.6-3.7-5.3-1.8-1.2-1.7-2.5-6.3-5.4-5.1-8.8-6.5-3.9-2.4-2.8-1.2-1.2 0.2-1.5 1.4-1.1 1.8-1.3 3-0.5 2.4 0 3.8-0.3 1-0.9 1-1.5 0.7-3 0.7-1.9-0.4-1.3-0.5-1.6-1.5-1-2.3-1-1.4-1.9-2-2.6-0.4-1.3-0.9-0.5-0.9 0.1-1.1 1.2-1.7 1.6-1.3 1.2-1.7 0.4-2.4-0.4-2.2-1.9-3-2.5-2.3-2.2-2.7-1.3-3-1.2-1.7-6.7-6.6-2.4-1.7-1.9-1-2.6 0.2-2.2 0.6-3.7 0.1-9.6-2.4 8.2-28.4 1.2-7.7-1.3-2.7-1.5-1.6-1.6-1.3-1.5-1.4-1-2-0.9-3.4-1.2-1.8-1.5-1.3-7.5-4.8-3.4-1.4-2.7-6.2-0.4-3.3 1.2-3.4 17.6-31.3 8.2-9.1 10.4-8 10.9-5 44.2-10.6 2.7-2.7-0.1-6.6-1.3-1.8-5.2-2.6-1.8-1.8-0.8-2.8-0.8-6.5-0.5-2-2.4-4.5-1.2-1.6-2.4-2.3-2.8-1.3-8.6-1.1-2.6-6.1 2.5-3.5 4.1-3 2.6-4.2-1.2-4.9-3-4.3-1.8-4.8 2.7-6.7 5.9-4.4 6 0.5 4.5 4.6 1.2 7.9 5.6-4 10.2-12.4 7.3-3.1 6.6 0.8 4.6 2.5 4.7 1.7 6.5-1.3 9.3-9.8 4.2-1.6 0.6 8.2 2.1-3.2 0.4-1 12 8.7 6.3 1.1z"
              id="SLV1358"
              name="Santa Ana"
              className="two"
            ></path>
          </Link>
          <circle cx="522.2" cy="226.1" id="0"></circle>
          <circle cx="549.7" cy="353.6" id="1"></circle>
          <circle cx="694" cy="389" id="2"></circle>
        </svg>
      </div>
      <div className="d-flex justify-content-around mt-3">
        <h3>Occidental</h3>
        <h3>Central</h3>
        <h3>Oriental</h3>
      </div>
    </div>
  );
}
