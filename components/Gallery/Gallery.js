import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import projects from '~/public/data/projects.json';
import arProjects from '~/public/data/projects-ar.json';
import ImageThumb from '../Cards/ImageThumb';
import Title from '../Title';
import useStyle from './gallery-style';

function Gallery() {
  const classes = useStyle();
  const { t, i18n: { language: locale } } = useTranslation('common');
  const [data, setData] = useState([arProjects]);
  const [visibleItems, setVisibleItems] = useState(9);
  const [loading, setLoading] = useState(false);
  const handleViewMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 9);
      setLoading(false);
    }, 500);
  };
  useEffect(() => {
    if (locale === 'en') {
      setData(projects);
    } else {
      setData(arProjects);
    }
  }, [locale]);

  return (
    <div className={classes.root}>
      <Container>
        <Title align="center">
          <strong>
            {t('saas-landing.prev_work')}
          </strong>
        </Title>
        <div className={classes.massonry}>
          {data?.slice(0, visibleItems)?.map((item, index) => (
            <div
              className={clsx(classes.item, classes.loaded)}
              key={index.toString()}
              style={{ transitionDuration: index / 4 + 's' }}
            >
              <ImageThumb
                img={item.img}
                title={item.title}
                link={item.link}
                size="short"
              />
            </div>
          ))}
        </div>
        <div className={classes.loading}>
          {loading && <CircularProgress />}
        </div>
        {data.length > visibleItems && (
          <div className={classes.btnArea}>
            <Button
              loading={loading.toString()}
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={handleViewMore}
            >
              {t('saas-landing.view_more')}
            </Button>
          </div>
        )}
        {data.length < 1 && <Typography variant="button" component="p" align="center">{t('sass-landing.gallery_nodata')}</Typography>}
      </Container>
    </div>
  );
}

export default Gallery;
