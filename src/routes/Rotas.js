import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";

import Home from "../Pages/Home";
import Sobre from "../Pages/Sobre";
import Service from "../Pages/Service";
import Portifoil from "../Pages/Portifoil";
import Contact from "../Pages/Contact";
import WorkUs from "../Pages/WorkUs";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/service" element={<Service />} />
            <Route path="/port" element={<Portifoil />} />
            <Route path="/cont" element={<Contact />} />
            <Route path="/WorkUs" element={<WorkUs />} />
        </Routes>
    );
}