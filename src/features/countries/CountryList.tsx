import { List } from "../../components/List";
import { Card } from "../../components/Card";
import { useCountries } from "./use-countries";
import { CountryInfo } from "types";
import { useNavigate } from "react-router-dom";

const CountryList = () => {
  const navigate = useNavigate();

  const [countries, { error, status }] = useCountries();
  return (
    <>
      {error && <h2>Не могу получить данные.</h2>}
      {status === "loading" && <h2>Загрузка...</h2>}

      {status === "received" && (
        <List>
          {countries.map((c) => {
            const countryInfo: CountryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => void navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export default CountryList;
