import { FormProvider, useForm } from "react-hook-form";
import "./FilterProjects.css";
import Select from "../Select/Select";
import Option from "../Option/Option";
import Form from "../Form/Form";
import FieldForm from "../FieldForm/FieldForm";
import { useContext, useState } from "react";
import { searchUsers } from "../../reducers/users/users.actions";
import Button from "../Button/Button";
import {
  cleanFilters,
  filterProjects,
} from "../../reducers/projects/projects.actions";
import { ProjectsContext } from "../../providers/ProjectsProvider";

const FilterProjects = () => {
  const methods = useForm();
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState();
  const { dispatch, state } = useContext(ProjectsContext);
  const { filtered } = state;

  const { register, handleSubmit, reset } = methods;

  return (
    <div onClick={() => setUsers([])}>
      <FormProvider {...methods}>
        <Form
          className="filter_projects"
          handleSubmit={handleSubmit((data) => filterProjects(data, dispatch))}
        >
          <div>
            <div className="search_by_alumn_wrp">
              <FieldForm
                className="search_by_alumn"
                register={() => register("nameUser")}
                ph="Buscar por alumno"
                fnc={(e) => {
                  searchUsers(setUsers, e.target.value);
                  setUserSelected(e.target.value);
                }}
                controlledInput
                value={userSelected}
              />
              <ul>
                {users.map((user) => (
                  <li key={user._id} onClick={() => setUserSelected(user.name)}>
                    {user.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Select
                maxHeight="200px"
                maxWidth="300px"
                name="type"
                className="search_select"
                defaultValue="Número de proyecto"
              >
                {Array.from({ length: 13 }, (_, i) => i + 1).map((el) => (
                  <Option value={el} key={el}>
                    {el}
                  </Option>
                ))}
              </Select>
            </div>
            <div>
              <Select
                maxHeight="200px"
                maxWidth="300px"
                name="averageRating"
                className="search_select"
                defaultValue="Puntuación mínima"
              >
                {Array.from({ length: 5 }, (_, i) => i + 1).map((el) => (
                  <Option value={el} key={el}>
                    {el}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="search_form_buttons">
            <Button className="search_button" type="submit">
              Buscar
            </Button>
            <Button
              className="search_button"
              onClick={() => {
                setUserSelected("");
                reset();
                cleanFilters(dispatch, filtered);
              }}
            >
              Limpiar
            </Button>
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

export default FilterProjects;
