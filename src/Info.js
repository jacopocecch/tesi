import React from "react";

import ItemForm from "./ItemForm";
import { useState, useEffect } from 'react';

const sites = {
    "comicsbox" : ["Comicsbox", "https://www.comicsbox.it/"],
    "comicsbox_bonelli" : ["Comicsbox (Bonelli)", "https://www.comicsbox.it/"],
    "animeclick" : ["Animeclick", "https://www.animeclick.it/"],
    "fumetto_online" : ["Fumetto-Online", "https://www.fumetto-online.it/it/"],
    "archivio_marvel" : ["Archivio Marvel Italia", "http://www.archivioitaliamarvel.com/cgi-bin/magazinedb_mobile.pl?action=elencoeditori"],
    "inducks" : ["Inducks", "https://inducks.org/country.php?c=it"],
    "bonelli" : ["Sergio Bonelli Editore", "https://www.sergiobonelli.it/sezioni/43/fumetti?tag_0=1&noinit=true&tag_2=%5B%20TO%20now%5D&sortElement=tag_2,true&page=1&sortDefault=false"],
    "astorina" : ["Astorina", "https://www.diabolik.it/commerce/"]
};

const Info = (props) => {

    const { navigation, infoData, setInfoData, siteData } = props;

    const [link, setLink] = useState(infoData.link);
    const [series, setSeries] = useState(infoData.series);
    const [siteInterval, setSiteInterval] = useState(infoData.site_interval);
    const [dexInterval, setDexInterval] = useState(infoData.dex_interval);
    const [title, setTitle] = useState(infoData.title);
    const [date, setDate] = useState(infoData.date);
    const [description, setDescription] = useState(infoData.description);
    const [price, setPrice] = useState(infoData.price);
    const [isbn, setIsbn] = useState(infoData.isbn);
    const [pages, setPages] = useState(infoData.pages);
    const [format, setFormat] = useState(infoData.format);
    const [color, setColor] = useState(infoData.color);
    const [binding, setBinding] = useState(infoData.binding);
    const [contents, setContents] = useState(infoData.contents);
    const [authors, setAuthors] = useState(infoData.authors);
    const [personas, setPersonas] = useState(infoData.personas);
    const [cover, setCover] = useState(infoData.cover);
    const [partialUpdate, setPartialUpdate] = useState(infoData.partialUpdate);
    const [astorinaPublication, setAstorinaPublication] = useState(infoData.astorina_publication);

    useEffect(() => {
        setInfoData({
            site: siteData,
            link: link,
            series: series,
            site_interval: siteInterval,
            dex_interval: dexInterval,
            title: title,
            date: date,
            price: price,
            description: description,
            isbn: isbn,
            pages: pages,
            format: format,
            color: color,
            binding: binding,
            contents: contents,
            authors: authors,
            personas: personas,
            cover: cover,
            partialUpdate: partialUpdate,
            astorina_publication: astorinaPublication
        })
    }, [link, series, siteInterval, dexInterval, title, date, price, description, isbn, pages, format, color, binding, contents, authors, personas, cover, partialUpdate, astorinaPublication])


    const { next, previous } = navigation;

    return (
        <div className="div-step col-12">
            <h1 className="text-center">
                
                <a className="col-md-6" href={sites[siteData][1]} target="_blank">
                    <img src={"http://localhost:81/backend/logos/" + siteData + ".png"} alt={sites[siteData][0]} width="200" height="auto"/>
                </a>
            </h1>
            <div className="form-row">
                <ItemForm
                    label="Link sito"
                    name="link"
                    value={link}
                    onChange={(e) => {
                        setLink(e.target.value)
                    }}
                    div_class="col-md-6 float-left form-group"
                />
                <ItemForm
                    label="ID collana"
                    name="series"
                    value={series}
                    onChange={(e) => {
                        setSeries(e.target.value)
                    }}
                    div_class="col-md-6 float-left form-group"
                />
            </div>
            <div className="form-row">
                <ItemForm
                    label="Numeri sito"
                    name="site_interval"
                    value={siteInterval}
                    onChange={(e) => {
                        setSiteInterval(e.target.value)
                    }}
                    div_class="col-md-6 float-left form-group"
                />
                <ItemForm
                    label="Numeri collana DEX"
                    name="dex_interval"
                    value={dexInterval}
                    onChange={(e) => {
                        setDexInterval(e.target.value)
                    }}
                    div_class="col-md-6 float-left form-group"
                />
            </div>
            <div className="col">
                <div className="form-group col-md-12 float-left form-confirm">
                    <p><b>Operazione sui dati</b></p>
                    {siteHasTitle(siteData) && 
                        <div className="form-check form-group">
                            <ItemForm
                                label="Titolo"
                                name="title"
                                type="radio"
                                value='title'
                                checked={title === 'title'}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                            />
                            <ItemForm
                                label="Sottotitolo"
                                name="title"
                                type="radio"
                                value='subtitle'
                                checked={title === 'subtitle'}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                            />
                            <ItemForm
                                label="No"
                                name="title"
                                type="radio"
                                value='false'
                                checked={title === 'false'}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                            />
                        </div>
                    }
                    <div className="form-group">
                        {siteHasDate(siteData) && 
                            <ItemForm
                                label="Data"
                                name="date"
                                type="checkbox"
                                checked={date}
                                onChange={(e) => {
                                    setDate(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        {siteHasPrice(siteData) && 
                            <ItemForm
                                label="Prezzo"
                                name="price"
                                type="checkbox"
                                checked={price}
                                onChange={(e) => {
                                    setPrice(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        {siteHasDescription(siteData) && 
                            <ItemForm
                                label="Descrizione"
                                name="description"
                                type="checkbox"
                                checked={description}
                                onChange={(e) => {
                                    setDescription(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        {siteHasISBN(siteData) && 
                            <ItemForm
                                label="ISBN"
                                name="isbn"
                                type="checkbox"
                                checked={isbn}
                                onChange={(e) => {
                                    setIsbn(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        {siteHasPages(siteData) && 
                            <ItemForm
                                label="Pagine"
                                name="pages"
                                type="checkbox"
                                checked={pages}
                                onChange={(e) => {
                                    setPages(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        {siteHasFormat(siteData) && 
                            <ItemForm
                                label="Formato"
                                name="format"
                                type="checkbox"
                                checked={format}
                                onChange={(e) => {
                                    setFormat(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        {siteHasColor(siteData) && 
                            <ItemForm
                                label="Colore"
                                name="color"
                                type="checkbox"
                                checked={color}
                                onChange={(e) => {
                                    setColor(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        {siteHasBinding(siteData) && 
                            <ItemForm
                                label="Rilegatura"
                                name="binding"
                                type="checkbox"
                                checked={binding}
                                onChange={(e) => {
                                    setBinding(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        {siteHasContents(siteData) && 
                            <ItemForm
                                label="Contenuti"
                                name="contents"
                                type="checkbox"
                                checked={contents}
                                onChange={(e) => {
                                    setContents(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        {siteHasAuthors(siteData) && 
                            <ItemForm
                                label="Autori"
                                name="authors"
                                type="checkbox"
                                checked={authors}
                                onChange={(e) => {
                                    setAuthors(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        {siteHasPersonas(siteData) && 
                            <ItemForm
                                label="Personaggi"
                                name="personas"
                                type="checkbox"
                                checked={personas}
                                onChange={(e) => {
                                    setPersonas(e.target.checked)
                                }}
                                div_class="form-check"
                            />
                        }
                        <ItemForm
                            label="Copertina"
                            name="cover"
                            type="checkbox"
                            checked={cover}
                            onChange={(e) => {
                                setCover(e.target.checked)
                            }}
                            div_class="form-check"
                        />
                        <ItemForm
                            label="Sovrascrivi dati"
                            name="partialUpdate"
                            type="checkbox"
                            checked={partialUpdate}
                            onChange={(e) => {
                                setPartialUpdate(e.target.checked)
                            }}
                            div_class="form-check"
                        />
                    </div>
                    {siteData == "astorina" && 
                        <div className="form-check form-group">
                            <ItemForm
                                label="Inedito"
                                name="astorina_publication"
                                type="radio"
                                value='inedito'
                                checked={astorinaPublication === 'inedito'}
                                onChange={(e) => {
                                    setAstorinaPublication(e.target.value)
                                }}
                            />
                            <ItemForm
                                label="R"
                                name="astorina_publication"
                                type="radio"
                                value='R'
                                checked={astorinaPublication === 'R'}
                                onChange={(e) => {
                                    setAstorinaPublication(e.target.value)
                                }}
                            />
                            <ItemForm
                                label="SWISSS"
                                name="astorina_publication"
                                type="radio"
                                value='SWISSS'
                                checked={astorinaPublication === 'SWISSS'}
                                onChange={(e) => {
                                    setAstorinaPublication(e.target.value)
                                }}
                            />
                            <ItemForm
                                label="Altro"
                                name="astorina_publication"
                                type="radio"
                                value='altro'
                                checked={astorinaPublication === 'altro'}
                                onChange={(e) => {
                                    setAstorinaPublication(e.target.value)
                                }}
                            />
                        </div>
                    }
                </div>
            </div>         
            <div className="text-center form-group">
                <button onClick={previous} className="btn btn-secondary col-md-5 btn-lg mr-5 ml-5">Indietro</button>
                <button onClick={next} className="btn btn-primary col-md-5 btn-lg mr-5 ml-5">Avanti</button>
            </div>
        </div>
    );
};

function siteHasTitle(siteData){

    return (siteData == "comicsbox_bonelli" || siteData == 'astorina' || siteData == "fumetto_online") ? false : true;
}

function siteHasDate(siteData){

    return siteData == "comicsbox_bonelli" ? false : true;
}

function siteHasPrice(siteData){

    return (siteData == "comicsbox_bonelli" || siteData == "comicsbox" || siteData == "fumetto_online") ? false : true;
}

function siteHasDescription(siteData){

    return (siteData == "archivio_marvel" || siteData == "inducks") ? false : true;
}

function siteHasISBN(siteData){

    return (siteData == "fumetto_online" || siteData == "bonelli") ? true : false;
}

function siteHasPages(siteData){

    return (siteData == "fumetto_online" || siteData == "archivio_marvel" || siteData == "inducks" || siteData == "bonelli") ? true : false;
}

function siteHasFormat(siteData){

    return (siteData == "comicsbox" || siteData == "animeclick" || siteData == "astorina") ? false : true;
}

function siteHasColor(siteData){

    return (siteData == "fumetto_online" || siteData == "archivio_marvel" || siteData == "bonelli") ? true : false;
}

function siteHasBinding(siteData){

    return (siteData == "fumetto_online" || siteData == "archivio_marvel" || siteData == "bonelli") ? true : false;
}

function siteHasAuthors(siteData){

    return (siteData == "animeclick" || siteData == "fumetto_online" || siteData == "archivio_marvel") ? false : true;
}

function siteHasPersonas(siteData){

    return (siteData == "inducks") ? true : false;
}

function siteHasContents(siteData){

    return (siteData == "comicsbox") ? true : false;
}

export default Info;