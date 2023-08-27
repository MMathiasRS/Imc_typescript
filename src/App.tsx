import { useState } from "react";
import "./App.css";

function App(props: any) {
  const [GetPeso, SetPeso] = useState<string>("");
  const [GetAltura, SetAltura] = useState<string>("");
  const [Getresultado, SetResp] = useState<string>("");
  const [GetErro, SetErro] = useState<string>("");

  const Imc = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isNaN(parseFloat(GetAltura)) && !isNaN(parseFloat(GetPeso))) {
      const altura = parseFloat(GetAltura);
      const peso = parseFloat(GetPeso);

      if (altura != 0 && peso != 0) {
        const resultado = (peso / altura ** 2).toFixed(2);
        const res = parseFloat(resultado)
        if(res < 16){
          SetResp(res + ' Magreza grau III');
        }else if (res > 16 && res < 16.9){
          SetResp(res + ' Magreza grau II');
        }else if (res > 17 && res < 18.4){
          SetResp(res + ' Magreza grau I');
        }else if (res > 18.5 && res < 24.9){
          SetResp(res + ' Adequado');
        }else if (res > 25 && res < 29.9){
          SetResp(res + ' Pre-obeso');
        }else if (res > 30){
          SetResp(res + ' Obesidade');
        }
       
      } else {
        alert("Altura e peso devem ser positivos.");
      }
    } else {
     SetErro('Altura e peso devem ser positivos.')
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-4">Calcule o IMC</h1>

        <div>
          <form className="row g-2">
            <div className="col col-md-6">
              <label className="form-label">Peso:</label>
              <input
                className="form-control"
                type="text"
                onChange={peso => SetPeso(peso.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Altura:</label>
              <input
                className="form-control"
                type="text"
                onChange={altura => SetAltura(altura.target.value)}
              />
            </div>

            <div className="col-md-12">
              <button className="btn btn-primary mt-3" onClick={Imc}>
                Calcular
              </button>
            </div>
          </form>
        </div>

        <div>
          <h2 className= {`text-center bgblue ${Getresultado ? 'bg-blue' :'bg-red'}`}>{ Getresultado ? Getresultado : GetErro}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
