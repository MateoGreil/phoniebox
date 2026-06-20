import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import PlayerContext from '../../context/player/context';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Display = () => {
  const { t } = useTranslation();
  const { state: { playerstatus } } = useContext(PlayerContext);

  const dontBreak = {
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const file = playerstatus?.file || '';
  const fileName = file.split('/').pop().split('?')[0];
  const stationName =
    playerstatus?.name && playerstatus.name !== fileName && playerstatus.name !== playerstatus?.title
      ? playerstatus.name
      : null;
  const subtitle = [playerstatus?.artist || stationName, playerstatus?.album]
    .filter(Boolean)
    .join(' • ');

  return (
    <Grid container>
      <Typography sx={dontBreak} component="h5" variant="h5">
        {playerstatus?.songid
          ? (playerstatus?.title || t('player.display.unknown-title'))
          : t('player.display.no-song-in-queue')
        }
      </Typography>
      <Typography sx={dontBreak} variant="subtitle1" color="textSecondary">
        {playerstatus?.songid && subtitle}
      </Typography>
    </Grid>
  );
};

export default Display;
