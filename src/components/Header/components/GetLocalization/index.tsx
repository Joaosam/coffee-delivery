import axios from "axios";
import { Fragment, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { BuyContext } from "../../../../contexts/BuyContext";
import { CheckCircle, MapPin } from "phosphor-react";
import { BounceLoader } from "react-spinners";
import { Location } from "./styled";

export function GetLocalization() {
  const {
    setCurrentIP,
    setLoading,
    loading,
    setIpCity,
    setIpRegion,
    currentIP,
    ipCity,
    ipRegion,
    theme,
  } = useContext(BuyContext);
  const apiKey = process.env.IP_GEOLOCALIZATION_KEY;

  useEffect(() => {
    axios.get(`https://api.ipify.org?format=json`).then((response) => {
      setCurrentIP(response.data.ip);
    });

    setLoading(!loading);
    // setTimeout(() => {
    //   axios
    //     .get(
    //       `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${currentIP}`
    //     )
    //     .then((response) => {
    //       setIpCity(response.data.location.region);
    //       setIpRegion(response.data.location.country);
    //       toast.success("Localização detectada com sucesso!", {
    //         style: { fontSize: "1.4rem" },
    //         theme: theme ? "light" : "dark",
    //         progressStyle: { background: "#8047f8" },
    //         icon: <CheckCircle weight="fill" size={22} color="#8047f8" />,
    //         autoClose: 2000,
    //       });
    //     })
    //     .catch(() => {
    //       setIpCity("São Paulo");
    //       setIpRegion("SP");
    //       toast.error("Erro ao detectar localização!", {
    //         style: { fontSize: "1.4rem" },
    //         theme: theme ? "light" : "dark",
    //         autoClose: 2000,
    //       });
    //     })
    //     .finally(() => {
    //       setLoading(loading);
    //     });
    // }, 1500);
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
