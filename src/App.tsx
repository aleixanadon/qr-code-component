import "./App.css";
import QRCode from "./components/QRCode/QR";
import { qr_strings } from "./utils/strings/qr_strings";

function App() {
  return (
    <>
      <QRCode 
        url={qr_strings.url} 
        primaryText={qr_strings.primaryText} 
        secondaryText={qr_strings.secondaryText} 
      />
    </>
  );
}

export default App;
