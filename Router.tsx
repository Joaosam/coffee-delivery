import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Checkout } from "./src/components/Checkout";
import { Home } from "./src/components/Home";
import { OrderConfirmed } from "./src/components/OrderConfirmed";
import { DefaultLayout } from "./src/layouts/DefaultLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderConfirmed" element={<OrderConfirmed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
