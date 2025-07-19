import Button from '@mui/material/Button';
import colors from '../../styles/Colors';

const renderSocialButtons = (social_media_list) => {
  return social_media_list.map((item, index) => (
    <Button
      key={index}
      variant="contained"
      color="white"
      className="social-media-button"
      sx={{
        borderRadius: '50%',
        margin: '0.5em',
        width: '0.2em',
        height: '4.5em',
        padding: 0,
        color: 'white',
        background: colors.black_grey,
        border: '0.2em solid white',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          background: 'black',
          color: 'white',
        }
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <item.icon size={50} />
      </span> 
    </Button>
  ));
};

export default renderSocialButtons;
