import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as Styled from './styles';

import { mapData } from '../../api/map-data';

import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import config from '../../config';

function Home() {
    const [data, setData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '-');
        const slug = pathName ? pathName : config.defaultSlug;

        const load = async () => {
            try {
                const data = await fetch(config.url + slug);
                const json = await data.json();
                const pageData = mapData(json);
                setData(pageData[0]);
            } catch (e) {
                setData(undefined);
            }
        };

        load();
    }, [location]);

    useEffect(() => {
        if (data === undefined) {
            document.title = `Página não encontrada | ${config.siteName}`;
        }

        if (data && !data.slug) {
            document.title = `Carregando... | ${config.siteName}`;
        }

        if (data && data.title) {
            document.title = `${data.title} | ${config.siteName}`;
        }
    }, [data]);

    const { menu, sections, footerHtml, slug } = data;
    const { links, text, link, srcImg } = menu;

    return (
        <Base
            links={links}
            footerHtml={footerHtml}
            logoData={{ text, link, srcImg }}
        >
            {sections.map((section, index) => {
                const { component } = section;
                const key = `${slug}-${index}`;

                if (component === 'section.section-two-columns') {
                    return <GridTwoColumn key={key} {...section} />;
                }
                if (component === 'section.section-content') {
                    return <GridContent key={key} {...section} />;
                }
                if (component === 'section.section-grid-text') {
                    return <GridText key={key} {...section} />;
                }
                if (component === 'section.section-grid-img') {
                    return <GridImage key={key} {...section} />;
                }
            })}
        </Base>
    );
}

export default Home;
