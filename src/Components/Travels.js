import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination:"Lisbon",
        country:"Portugal",
        photo:"https://www.flytap.com/-/media/Flytap/Campaigns/2017/NewDest/BB1024x553_LISBOA.jpg",
        distance:"20km"
    },
    {
        destination:"Porto",
        country:"Portugal",
        photo:"https://www.visitportugal.com/sites/default/files/styles/experiencias_detalhe/public/mediateca/Porto_d.jpg?itok=b0N9em9u",
        distance:"250km"
    },
    {
        destination:"Coimbra",
        country:"Portugal",
        photo:"https://imagens.publico.pt/imagens.aspx/1387934?tp=UH&db=IMAGENS&type=JPG&w=1920",
        distance:"150km"
    },
    {
        destination:"Aveiro",
        country:"Portugal",
        photo:"https://www.noticiasdeaveiro.pt/wp-content/uploads/2019/09/canal_central.jpg",
        distance:"200km"
    },
    {
        destination:"Guimarães",
        country:"Portugal",
        photo:"https://www.visitportugal.com/sites/www.visitportugal.com/files/mediateca/CG---4_660x371.jpg",
        distance:"300km"        
    }
];

const Travels = () => (
        travels.map(travel => (
            <Travel key={travel.destination} travelObject={travel}/>
        ))
);

export default Travels;