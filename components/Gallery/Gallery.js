import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import ImageThumbCard from '../Cards/ImageThumb';
import Title from '../Title';
import useStyle from './gallery-style';

const portfolio = [
  {
    img: imgAPI.profile[0],
    title: 'Buiding',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.profile[1],
    title: 'Clinic',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat2'
  },
  {
    img: imgAPI.profile[2],
    title: 'Furniture',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat3'
  },
  {
    img: imgAPI.profile[3],
    title: 'fast food',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat1'
  },
  {
    img: imgAPI.profile[4],
    title: 'dentist',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat2'
  },
  {
    img: imgAPI.profile[5],
    title: 'home-renovation',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat3'
  },
  {
    img: imgAPI.profile[6],
    title: 's29',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.profile[7],
    title: 'hotel',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat2'
  },
  {
    img: imgAPI.profile[8],
    title: 'gym',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat2'
  },
];

function Gallery() {
  const classes = useStyle();
  const { t } = useTranslation('common');
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(portfolio);
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <Title>
          <strong>
            {t('profile-landing.works')}
          </strong>
        </Title>
        <div className={classes.massonry}>
          {data.map((item, index) => (
            <div
              className={clsx(classes.item, classes.loaded)}
              key={index.toString()}
              style={{ transitionDuration: index / 4 + 's' }}
            >
              <ImageThumbCard
                img={item.img}
                title={item.title}
                link={item.link}
                size={item.size}
              />
            </div>
          ))}
        </div>
        {data.length < 1 && <Typography variant="button" component="p" align="center">{t('profile-landing.gallery_nodata')}</Typography>}
      </Container>
    </div>
  );
}

export default Gallery;
