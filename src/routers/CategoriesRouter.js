import {
  NavLink,
  Route,
  useResolvedPath,
  Routes,
  Navigate,
} from "react-router-dom";
import ActionPage from "../pages/categories/ActionPage";
import AnimePage from "../pages/categories/AnimePage";
import GorePage from "../pages/categories/terror/GorePage";
import SuspensePage from "../pages/categories/terror/SuspensePage";
import TerrorPage from "../pages/categories/TerrorPage";
import CategoriesPage from "../pages/CategoriesPage";
import PrivateRoute from "./PrivateRoute";

export default function CategoriesRouter() {
  const url = useResolvedPath("").pathname
  // console.log(url)
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to={`${url}`} className="btn btn-outline-success me-1">
              All
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/terror`} className="btn btn-outline-success me-2">
              Terror
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/action`} className="btn btn-outline-success me-2">
              Action
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/anime`} className="btn btn-outline-success me-2">
              Anime
            </NavLink>
          </li>
        </ul>
      </nav>
      <>
        <Routes>
          <Route path="/" element={<CategoriesPage />} />
          <Route exact path="terror/*" element={<PrivateRoute component={TerrorRouter} />} />
          <Route exact path="/action" element={<ActionPage />} />
          <Route exact path="/anime" element={<AnimePage />} />
          <Route
            path="/*"
            element={<Navigate to="/404" replace />}
          />
        </Routes>
      </>
    </div>
  );
}

function TerrorRouter() {
  const urlTerror = useResolvedPath("").pathname;
  //console.log(urlTerror);
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to={`${urlTerror}`} className="btn btn-outline-success me-1">All</NavLink>
        </li>
        <li>
          <NavLink to={`${urlTerror}/gore`} className="btn btn-outline-success me-1">Gore</NavLink>
        </li>
        <li>
          <NavLink to={`${urlTerror}/suspense`} className="btn btn-outline-success me-1">Suspense</NavLink>
        </li>
      </ul>

      <Routes>
        <Route exact path="/"  element={<TerrorPage />} />
        <Route exact path="/gore" element={<GorePage />} />
        <Route exact path="/suspense" element={<SuspensePage />} />
        <Route
            path="/*"
            element={<Navigate to="/404" replace />}
          />
      </Routes>
    </div>
  );
}
