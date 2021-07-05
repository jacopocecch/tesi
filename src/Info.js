import React from "react";

import ItemForm from "./ItemForm";

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

const Info = ({ setForm, formData, navigation }) => {

    const { site, link, series, site_interval, dex_interval, scrape_title, date, price, description, isbn, pages, format, color, binding, contents, authors, personas, cover, partialUpdate, comicset, astorina_publication } = formData;

    const { next, previous } = navigation;

    return (
        <div className="div-step col-12">
            <h1 className="text-center">
                <a className="col-md-6" href={sites[site][1]} target="_blank">
                    {sites[site][0]}
                </a>
                <a className="col-md-6" href={sites[site][1]} target="_blank">
                    <img src={"./backend/logos/" + site + ".png"} alt="Logo" width="200" height="auto"/>
                </a>
            </h1>
            <div className="form-row">
                <ItemForm
                    label="Link sito"
                    name="link"
                    value={link}
                    onChange={setForm}
                    div_class="col-md-6 float-left form-group"
                />
                <ItemForm
                    label="ID collana"
                    name="series"
                    value={series}
                    onChange={setForm}
                    div_class="col-md-6 float-left form-group"
                />
            </div>
            <div className="form-row">
                <ItemForm
                    label="Numeri sito"
                    name="site_interval"
                    value={site_interval}
                    onChange={setForm}
                    div_class="col-md-6 float-left form-group"
                />
                <ItemForm
                    label="Numeri collana DEX"
                    name="dex_interval"
                    value={dex_interval}
                    onChange={setForm}
                    div_class="col-md-6 float-left form-group"
                />
            </div>
            <div className="col">
                <div className="form-group col-md-12 float-left form-confirm">
                    <p><b>Operazione sui dati</b></p>
                    {siteHasComicset(site) && 
                        <div className="form-check form-group">
                            <ItemForm
                                label="Collana"
                                name="comicset"
                                type="radio"
                                value='true'
                                defaultChecked
                                onChange={setForm}
                            />
                            <ItemForm
                                label="Serie"
                                name="comicset"
                                type="radio"
                                value='false'
                                onChange={setForm}
                            />
                        </div>
                    }
                    {siteHasTitle(site) && 
                        <div className="form-check form-group">
                            <ItemForm
                                label="Titolo"
                                name="title"
                                type="radio"
                                value='title'
                                onChange={setForm}
                            />
                            <ItemForm
                                label="Sottotitolo"
                                name="title"
                                type="radio"
                                value='subtitle'
                                onChange={setForm}
                            />
                            <ItemForm
                                label="No"
                                name="title"
                                type="radio"
                                value='false'
                                defaultChecked
                                onChange={setForm}
                            />
                        </div>
                    }
                    <div className="form-group">
                        {siteHasDate(site) && 
                            <div className="form-check">
                                <ItemForm
                                    label="Data"
                                    name="date"
                                    type="checkbox"
                                    value={date}
                                    defaultChecked
                                    onChange={setForm}
                                />
                            </div>
                        }
                        {siteHasPrice(site) && 
                            <div className="form-check">
                                <ItemForm
                                    label="Prezzo"
                                    name="price"
                                    type="checkbox"
                                    value={price}
                                    defaultChecked
                                    onChange={setForm}
                                />
                            </div>
                        }
                        {siteHasDescription(site) && 
                            <div className="form-check">
                                <ItemForm
                                    label="Descrizione"
                                    name="description"
                                    type="checkbox"
                                    checked={description}
                                    onChange={setForm}
                                />
                            </div>
                        }
                        {siteHasISBN(site) && 
                            <div className="form-check">
                                <ItemForm
                                    label="ISBN"
                                    name="isbn"
                                    type="checkbox"
                                    checked={isbn}
                                    onChange={setForm}
                                />
                            </div>
                        }
                        {siteHasPages(site) && 
                            <div className="form-check">
                                <ItemForm
                                    label="Pagine"
                                    name="pages"
                                    type="checkbox"
                                    checked={pages}
                                    onChange={setForm}
                                />
                            </div>
                        }
                        {siteHasFormat(site) && 
                            <div className="form-check">
                                <ItemForm
                                    label="Formato"
                                    name="format"
                                    type="checkbox"
                                    checked={format}
                                    onChange={setForm}
                                />
                            </div>
                        }
                        {siteHasColor(site) && 
                            <div className="form-check">
                                <ItemForm
                                    label="Colore"
                                    name="color"
                                    type="checkbox"
                                    checked={color}
                                    onChange={setForm}
                                />
                            </div>
                        }
                        {siteHasBinding(site) && 
                            <div className="form-check">
                                <ItemForm
                                    label="Rilegatura"
                                    name="binding"
                                    type="checkbox"
                                    checked={binding}
                                    onChange={setForm}
                                />
                            </div>
                        }
                        {siteHasAuthors(site) && 
                            <div className="form-check">
                                <ItemForm
                                    label="Autori"
                                    name="authors"
                                    type="checkbox"
                                    checked={authors}
                                    onChange={setForm}
                                />
                            </div>
                        }
                        {siteHasPersonas(site) && 
                            <div className="form-check">
                                <ItemForm
                                    label="Personaggi"
                                    name="personas"
                                    type="checkbox"
                                    checked={personas}
                                    onChange={setForm}
                                />
                            </div>
                        }
                        <div className="form-check">
                            <ItemForm
                                label="Copertina"
                                name="cover"
                                type="checkbox"
                                checked={cover}
                                onChange={setForm}
                            />
                        </div>
                        <div className="form-check">
                            <ItemForm
                                label="Sovrascrivi dati"
                                name="partialUpdate"
                                type="checkbox"
                                checked={partialUpdate}
                                onChange={setForm}
                            />
                        </div>
                    </div>
                    {site == "astorina" && 
                        <div className="form-check form-group">
                            <ItemForm
                                label="Inedito"
                                name="astorina_publication"
                                type="radio"
                                value='inedito'
                                onChange={setForm}
                            />
                            <ItemForm
                                label="R"
                                name="astorina_publication"
                                type="radio"
                                value='R'
                                onChange={setForm}
                            />
                            <ItemForm
                                label="SWISSS"
                                name="astorina_publication"
                                type="radio"
                                value='SWISSS'
                                onChange={setForm}
                            />
                            <ItemForm
                                label="Altro"
                                name="astorina_publication"
                                type="radio"
                                value='altro'
                                defaultChecked
                                onChange={setForm}
                            />
                        </div>
                    }
                </div>
            </div>         
            <div>
                <button onClick={previous} className="btn btn-secondary">Indietro</button>
                <button onClick={next} className="btn btn-primary">Avanti</button>
            </div>
        </div>
    );
};

function siteHasTitle(site){

    return (site == "comicsbox_bonelli" || site == 'astorina' || site == "fumetto_online") ? false : true;
}

function siteHasDate(site){

    return site == "comicsbox_bonelli" ? false : true;
}

function siteHasPrice(site){

    return (site == "comicsbox_bonelli" || site == "comicsbox" || site == "fumetto_online") ? false : true;
}

function siteHasDescription(site){

    return (site == "archivio_marvel" || site == "inducks") ? false : true;
}

function siteHasISBN(site){

    return (site == "fumetto_online" || site == "bonelli") ? true : false;
}

function siteHasPages(site){

    return (site == "fumetto_online" || site == "archivio_marvel" || site == "inducks" || site == "bonelli") ? true : false;
}

function siteHasFormat(site){

    return (site == "comicsbox" || site == "animeclick" || site == "astorina") ? false : true;
}

function siteHasColor(site){

    return (site == "fumetto_online" || site == "archivio_marvel" || site == "bonelli") ? true : false;
}

function siteHasBinding(site){

    return (site == "fumetto_online" || site == "archivio_marvel" || site == "bonelli") ? true : false;
}

function siteHasAuthors(site){

    return (site == "animeclick" || site == "fumetto_online" || site == "archivio_marvel") ? false : true;
}

function siteHasPersonas(site){

    return (site == "inducks") ? true : false;
}

function siteHasComicset(site){

    return (site == "animeclick" || site == "fumetto_online") ? true : false;
}
export default Info;