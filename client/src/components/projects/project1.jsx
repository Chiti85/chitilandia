import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/projects/project1.css";

import Portada from "../../images/poject1/portada dayland behance.png";
import Photo2Pro from "../../images/poject1/interior 1 Diario daylann UK.png";
import Photo3Pro from "../../images/poject1/interior 2 mundo daylann UK.png";
import Photo4Pro from "../../images/poject1/interior 3 memo pad 2 daylann UK.png";
import Photo5Pro from "../../images/poject1/interior 3 monthly tracker daylann UK.png";
import Photo6Pro from "../../images/poject1/interior 3 shooping list daylann UK.png";
import Photo7Pro from "../../images/poject1/interior 6 end of the month daylann UK.png";
import Photo8Pro from "../../images/poject1/fondop1.png";

const Project1 = () => {
  return (
    <>
      <img className="PortDtl" src={Portada}></img>
      <p className="pProjects">
        Dayland is a project developed for the entrepreneur Zoa Luengo, she
        approached me with the idea of creating a new thank-you diary to replace
        the one she has now for sale to her clients; After talking about the
        project we decided to go further and make a monthly that covers multiple
        functionalities. This personal diary has a utility of only one month,
        the goal is that the user can carry his Dayland anywhere making it light
        and manageable.
        <br></br>
        The Dayland is a menship that has the necessary tools not only to keep
        track of our daily habits, but also gives you the possibility to track
        your economy, your healthy habits and your projects within the planning
        of your day to day on a weekly and monthly basis.
      </p>
      <img className="photo2Proj" src={Photo2Pro}></img>
      <p className="subtittlePDtl">
        Main personal daily organization page / Pagina de organización diaria
        personal principal
      </p>
      <img className="photo2Proj" src={Photo3Pro}></img>
      <p className="subtittlePDtl">
        Memory of my trips / Memoria de mis viajes
      </p>
      <img className="photo2Proj" src={Photo4Pro}></img>
      <p className="subtittlePDtl">Memo pad / Block de notas</p>
      <img className="photo2Proj" src={Photo5Pro}></img>
      <p className="subtittlePDtl">
        Annual Calendar and Monthly Tracker / Calendar Anual y Rastreador
        Mensual.
      </p>
      <img className="photo2Proj" src={Photo6Pro}></img>
      <p className="subtittlePDtl">
        The healthy shopping list / La lista de la compra saludable.
      </p>
      <img className="photo2Proj" src={Photo7Pro}></img>
      <p className="subtittlePDtl">
        Economic summary for the end of the month / Resumen económico para el
        final de mes.
      </p>
      <p className="pProjects">
        For the cover I was inclined to design four possible alternatives, in
        the end the client decided on the one with the black vertical letters,
        being a tool created for monthly use, I created covers in different
        colors, thus generating a series.
      </p>
      <img className="PortDtl2" src={Photo8Pro}></img>
      <Link to={{ pathname: `/proj` }}>
        <img
          className="where bottonBack"
          src="../../../image/navbarProjects.png"
        ></img>
      </Link>
    </>
  );
};

export default Project1;
