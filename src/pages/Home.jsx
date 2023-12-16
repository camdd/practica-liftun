import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";

import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import { ACTIONS_TYPES } from "../utils/index.js";
import "./Home.css";

const columns = [
    { field: "action_name", headerName: "Nombre", width: 180, sortable: false },
    {
        field: "action_type",
        headerName: "Tipo de Acción",
        width: 280,
        sortable: false,
        valueGetter: (params) =>
            ACTIONS_TYPES.find(
                (actionType) => actionType.value === params.row.action_type,
            ).label,
    },
    {
        field: "date_from",
        headerName: "Desde",
        width: 100,
        sortable: false,
        valueGetter: (params) =>
            `${new Date(params.row.date_from).toLocaleDateString()}`,
    },
    {
        field: "date_to",
        headerName: "Hasta",
        width: 100,
        sortable: false,
        valueGetter: (params) =>
            `${new Date(params.row.date_to).toLocaleDateString()}`,
    }
];

const Home = () => {
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 5,
        page: 0,
        totalItems: 0,
    });
    const [rowCount, setRowCount] = useState(0);

    const { isLoading, data } = useQuery({
        // se crea una key con el numero de pagina y la cantidad de items por pagina
        queryKey: [
            "actions",
            { pageSize: paginationModel.pageSize, page: paginationModel.page },
        ],
        queryFn: async () => {
            // se hace la request y se setean en la URL el tamaño de pagina y la pagina a consultar
            // se le suma "1" a la pagina porque el indice de json-server empieza en 1, pero el de la tabla empieza en 0
            const response = await fetch(
                `http://localhost:3000/actions?_page=${
                    paginationModel.page + 1
                }&_limit=${paginationModel.pageSize}`,
            );
            const totalItems = response.headers.get("X-Total-Count");
            if (Number(totalItems)) {
                // se actualiza el numero total de items
                setRowCount(Number(totalItems));
            }
            return await response.json();
        },
    });
    return (
        <Layout>
            <section className="banner">
                <div className="banner__content container">
                    <h3 className="banner__title"> EcoTech </h3>
                    <p className="banner__text">
                        En EcoTech nos encargamos de que todas las empresas puedan tener
                        funcionalidades sostenibles.
                    </p>

                    <div className="table_container">
                        {!isLoading && data && (
                            <DataGrid
                                rows={data}
                                columns={columns}
                                paginationModel={paginationModel}
                                onPaginationModelChange={setPaginationModel}
                                pageSizeOptions={[5]}
                                disableRowSelectionOnClick
                                disableColumnMenu
                                paginationMode="server"
                                rowCount={rowCount}
                            />
                        )}
                        {isLoading && <span>Cargando....</span>}
                    </div>
                    <Link className="banner__link" to="/create-action">
                        Crea tu acción sostenible
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
