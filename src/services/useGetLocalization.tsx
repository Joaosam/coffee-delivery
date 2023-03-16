import axios from "axios";
import { CheckCircle } from "phosphor-react";
import { toast } from "react-toastify";
import { useBuyContext } from "../contexts/BuyContext";

export function useGetLocalization() {
  const { setLoading, loading, setIpCity, setIpRegion, currentIP, theme } =
    useBuyContext();
  const apiKey = process.env.IP_GEOLOCALIZATION_KEY;

  async function getLocalization() {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${currentIP}`
      );
      setIpCity(response.data.location.region);
      setIpRegion(response.data.location.country);
      toast.success("Localização detectada com sucesso!", {
        style: { fontSize: "1.4rem" },
        theme: theme ? "light" : "dark",
        progressStyle: { background: "#8047f8" },
        icon: <CheckCircle weight="fill" size={22} color="#8047f8" />,
        autoClose: 2000,
      });
    } catch {
      setIpCity("São Paulo");
      setIpRegion("SP");
      toast.error("Erro ao detectar localização!", {
        style: { fontSize: "1.4rem" },
        theme: theme ? "light" : "dark",
        autoClose: 2000,
      });
    } finally {
      setLoading(loading);
    }
  }

  return getLocalization;
}
