import c3po from "../assets/c-3po.jpg";
import dartVaider from "../assets/dartVaider.jpg";
import lukSkywolker from "../assets/LukSkywolker.jpg";
import ouenLars from "../assets/OuenLars.jpg";
import r2d2 from "../assets/r2-d2.jpg";
import leilaOrgana from "../assets/leilaOrgana.jpg";
import obiVanKenobi from "../assets/obiVanKenobi.jpg";
import beruWhitesunlars from "../assets/BeruWitesan.jpg";
import anakinSkywalker from "../assets/anakinSkywalker.jpg";
import jabbaHutt from "../assets/jabbaHutt.jpg";
import chewbacca from "../assets/Chewbacca.jpg";
import HanSolo from "../assets/HanSolo.jpg";
import WedgeAntilles from "../assets/WedgeAntilles.jpg";
import Yoda from "../assets/Yoda.jpg";
import Palpatine from "../assets/Palpatine.jpg";
import BobaFett from "../assets/BobaFett.jpg";
import LandoCalrissian from "../assets/LandoCalrissian.jpg";
import Ackbar from "../assets/Ackbar.jpg";
import MonMothma from "../assets/MonMothma.jpg";
import ArvelCrynyd from "../assets/ArvelCrynyd.jpg";
import WicketSystriWarrick from "../assets/WicketSystriWarrick.jpg";
import NienNunb from "../assets/NienNunb.jpg";
import BibFortuna from "../assets/BibFortuna.jpg";
import IG88 from "../assets/IG-88.jpg";
import Bossk from "../assets/Bossk.jpg";
import Lobot from "../assets/Lobot.jpg";
import R5D4 from "../assets/R5-D4.jpg";
import BiggsDarklighter from "../assets/BiggsDarklighter.jpg";
import WilhuffTarkin from "../assets/WilhuffTarkin.jpg";
import Greedo from "../assets/Greedo.jpg";
import JekTonoPorkins from "../assets/JekTonoPorkins.jpg";
import RaymusAntilles from "../assets/RaymusAntilles.jpg";
import NuteGunray from "../assets/NuteGunray.jpg";
import QuiGonJinn from "../assets/QuiGonJinn.jpg";
import FinisValorum from "../assets/FinisValorum.jpg";

const listCharacters = {
    "Luke Skywalker": lukSkywolker,
    "Darth Vader": dartVaider,
    "C-3PO": c3po,
    "R2-D2": r2d2,
    "Leia Organa": leilaOrgana,
    "Owen Lars": ouenLars,
    "Obi-Wan Kenobi": obiVanKenobi,
    "Beru Whitesun lars": beruWhitesunlars,
    "Anakin Skywalker": anakinSkywalker,
    "Jabba Desilijic Tiure": jabbaHutt,
    "Chewbacca": chewbacca,
    "Han Solo": HanSolo,
    "Wedge Antilles": WedgeAntilles,
    "Yoda": Yoda,
    "Palpatine": Palpatine,
    "Boba Fett": BobaFett,
    "Lando Calrissian": LandoCalrissian,
    "Ackbar": Ackbar,
    "Mon Mothma": MonMothma,
    "Arvel Crynyd": ArvelCrynyd,
    "Wicket Systri Warrick": WicketSystriWarrick,
    "Nien Nunb": NienNunb,
    "Bib Fortuna": BibFortuna,
    "IG-88": IG88,
    "Bossk": Bossk,
    "Lobot": Lobot,
    "R5-D4": R5D4,
    "Biggs Darklighter": BiggsDarklighter,
    "Wilhuff Tarkin": WilhuffTarkin,
    "Greedo": Greedo,
    "Jek Tono Porkins": JekTonoPorkins,
    "Raymus Antilles": RaymusAntilles,
    "Nute Gunray": NuteGunray,
    "Qui-Gon Jinn": QuiGonJinn,
    "Finis Valorum": FinisValorum,
};


export default function renderDetailBodyCharacters(characters) {

    const $characters = document.createElement('section');
    const $charactersnTitle = document.createElement('h2');
    const $charactersBox = document.createElement('div');
    const $swiper = document.createElement('div');
    const $swiperWrapper = document.createElement('div');
    const $charactersDescription = document.createElement('div');
    const $charactersText = document.createElement('p');

    $charactersnTitle.setAttribute('id', 'charactersnTitle');

    $characters.classList.add('container', 'characters');
    $charactersnTitle.classList.add('characters__title');
    $swiper.classList.add('characters__swiper');
    $swiperWrapper.classList.add('swiper-wrapper');
    $charactersBox.classList.add('characters__box');
    $charactersText.classList.add('characters__text');

    $charactersnTitle.textContent = 'Characters';
    $charactersText.textContent = 'In this block, I give you the opportunity to view which characters are present in a given episode. But there is one thing! Unfortunately, it was not possible to provide absolutely all the characters, for the reason that the remote server does not belong to us, it is in the public domain. If we try to load absolutely all the characters, the site will crash, so for convenience we will provide a link by clicking on which you can view the entire list.'

    $swiper.append($swiperWrapper);
    $characters.append($charactersnTitle);
    $charactersDescription.append($charactersText);
    $charactersBox.append($swiper);
    $charactersBox.append($charactersDescription);
    $characters.append($charactersBox);

    for (let persona of characters) {
        let name = persona.name;
        const $swiperSlide = document.createElement('div');
        $swiperSlide.classList.add('characters__swiper-slide', 'swiper-slide');
        $swiperSlide.style.backgroundImage = `url(${listCharacters[name]})`;

        const $swiperSlideText = document.createElement('span');
        $swiperSlideText.textContent = name;
        $swiperSlideText.classList.add('characters__swiper-slide__text');
        $swiperSlide.append($swiperSlideText)
        $swiperWrapper.append($swiperSlide);
    }

    return $characters;
}

