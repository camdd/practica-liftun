import Layout from "../layouts/Layout"
import Card from "../components/Card/Card";
import './Create-action.css'
import {useForm} from "react-hook-form";
import ActionButton from "../components/ActionButton/index.jsx";
import {TextField} from "@radix-ui/themes";
import CalendarImg from "../assets/Calendar.png";
import Calendar from "../components/Calendar/index.jsx";
import OptionSwitch from "../components/OptionSwitch/index.jsx";
import ActionSelector from "../components/ActionSelector/index.jsx";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";

const CreateAction = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    const {isLoading, mutate} = useMutation({
        mutationFn: (data) => fetch("http://localhost:3000/actions", {
            // el header de content-type es requerido por json-server
            // https://github.com/typicode/json-server?tab=readme-ov-file#getting-started
            body: JSON.stringify(data), method: "POST", headers: {"Content-Type": "application/json"}
        }),
        onSuccess:() =>{
            // invalidamos la cache del listado de acciones
            queryClient.invalidateQueries({ queryKey: ['actions'] });
            navigate("../");
        }
    });

    const {control, handleSubmit, register} = useForm({
        // valores por defecto del formulario
        defaultValues: {
            action_name: '',
            date_from: null,
            date_to: null,
            action_type: '',
            responsible: false,
            objective: false,
            co2_footprint: false,
            legal_advice: false,
        }
    });
    const onSubmit = (data) => {
        // se parsea a string las fechas ya que son un objeto de dayjs
        mutate({...data, date_from: data.date_from.toString(), date_to: data.date_to.toString()});
    };

    return (<Layout>
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <Card>

                <div className="action-name-input">
                    <TextField.Input
                        className="placeholder-text"
                        placeholder="Nombre de la acción *"
                        required
                        {...register("action_name")}
                    />
                </div>

                <div className="switch-question-title">Seleccionar fecha</div>
                <div className="calendar-container">
                    <div className="calendar-icon">
                        <img src={CalendarImg} alt=""/>
                    </div>
                    <Calendar className="calendar" control={control}/>
                </div>


                <OptionSwitch label={"¿Su acción tiene un responsable?"} control={control} name="responsible"/>
                <OptionSwitch label={"¿Su acción tiene un objetivo?"} control={control} name="objective"/>


                <div className="action-type">
                    <ActionSelector control={control} name="action_type"/>
                </div>

                <OptionSwitch label={"¿Su acción requiere calcular la huella de carbono?"} control={control}
                              name="co2_footprint"/>

                <OptionSwitch label={"¿Su acción es una obligación legal?"} control={control}
                              name="legal_advice"/>

                <div className="buttons">
                    <ActionButton
                        buttonText="Cancelar"
                        buttonStyle="secondary"
                        onClick={() => navigate("../")}
                    />
                    <ActionButton
                        buttonText="Guardar"
                        disabled={isLoading}
                        type="submit"
                    />
                </div>
            </Card>
        </form>
    </Layout>)
}

export default CreateAction