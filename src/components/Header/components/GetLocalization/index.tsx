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
  } = useContext(BuyContext);
  useEffect(() => {
    axios.get(`https://api.ipify.org?format=json`).then((response) => {
      setCurrentIP(response.data.ip);
    });

    setLoading(!loading);
    setTimeout(() => {
      axios
        .get(`http://ip-api.com/json/${currentIP}`)
        .then((response) => {
          if (response.data.status === "success") {
            setIpCity(response.data.city);
            setIpRegion(response.data.region);
            toast.success("Localização detectada com sucesso!", {
              style: { fontSize: "1.4rem" },
              progressStyle: { background: "#4b2995" },
              icon: <CheckCircle weight="fill" size={22} color="#4b2995" />,
              autoClose: 2000,
            });
          } else {
            setIpCity("São Paulo");
            setIpRegion("SP");
            toast.error("Erro ao detectar localização!", {
              style: { fontSize: "1.4rem" },
              autoClose: 2000,
            });
          }
        })
        .finally(() => {
          setLoading(loading);
        });
    }, 2500);
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
