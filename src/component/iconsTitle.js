import AppsTwoToneIcon from "@material-ui/icons/AppsTwoTone";
import SettingsIcon from "@material-ui/icons/Settings";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import { Button } from "@material-ui/core";
const IconsTitle = () => {
  return (
    <>
      <Button>
        <SettingsIcon height="0" />
      </Button>
      <Button>
        <AppsTwoToneIcon />
      </Button>
      <Button>
        <RefreshOutlinedIcon />
      </Button>
    </>
  );
};
export default IconsTitle;
