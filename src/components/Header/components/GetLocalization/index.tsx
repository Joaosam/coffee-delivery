import axios from "axios";
import { Fragment, useEffect } from "react";
import { useBuyContext } from "../../../../contexts/BuyContext";
import { MapPin } from "phosphor-react";
import { BounceLoader } from "react-spinners";
import { Location } from "./styled";
import { useGetLocalization } from "../../../../services/useGetLocalization";

export function GetLocalization() {
  const { setCurrentIP, setLoading, loading, ipCity, ipRegion } =
    useBuyContext();
  const getLocalization = useGetLocalization();

  useEffect(() => {
    axios.get(`https://api.ipify.org?format=json`).then((response) => {
      setCurrentIP(response.data.ip);
    });
    setLoading(!loading);

    setTimeout(() => {
      getLocalization();
    }, 1500);
  }, []);

  return (
    <Location>
      {loading ? (
        <BounceLoader size={22} color="#4b2995" />
      ) : (
        <Fragment>
          <MapPin weight="fill" size={22} />
          <span>
            {ipCity}, {ipRegion}
          </span>
        </Fragment>
      )}
    </Location>
  );
}
