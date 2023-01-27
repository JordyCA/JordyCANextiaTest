//** Boostrap libraries */
import Table from 'react-bootstrap/Table';


const Tables = ({ headerTables = [], bodyTables = [], typeTable = "" }) => {
    console.log('type ----->' + typeTable)
    console.log('%ctables.components.jsx line:6 bodyTables', 'color: #007acc;', bodyTables);
    return (
        <Table responsive="sm" size="sm" variant="dark">
            <thead>
                <tr>
                    {
                        headerTables.length && (
                            headerTables.map((data) => {
                                return <th>{data}</th>
                            })
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    bodyTables.length && (
                        bodyTables.map((data) => {
                            switch (typeTable) {
                                case "tickets":
                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td> </td>
                                            <td>{data.date_capture}</td>
                                            <td>{data.cf_fecha_recibido_formato_almacen}</td>
                                            <td>{data.cf_numero_factura}</td>
                                            <td> </td>
                                            <td>{data.id}</td>
                                            <td>{data.is_closed ? "CERRADO" : "SIN CERRAR"}</td>
                                        </tr>
                                    );
                                    break;
                                default:
                                    return (
                                        <tr></tr>
                                    )
                            }

                        })
                    )
                }
            </tbody>
        </Table>
    );

}

export default Tables;