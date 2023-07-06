import React, { useEffect, useState } from "react";
import Menu from "@/components/Menu";
import styles from "@/styles/Dashboard.module.css";
import TableAgencies from "@/components/TableAgencies";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@/components/Card";
import ModalOffice from "@/components/ModalOffice";
import ModalTravel from "@/components/ModalTravel";
import ModalEmployee from "@/components/ModalEmployee";
import { useUser } from "@/context/UserContext";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

const Dashboard = () => {
  const [office, setOffice] = useState(false)
  const [employee, setEmployee] = useState(false)
  const [travels, setTravels] = useState(false)
  const { user } = useUser();
  const lista = async () => {
    const agencies = await API.graphql({
      query: queries.listAgencies,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log('ejele', agencies)
  };
  const openOffice = () => {
    setOffice(true)
  }
  const openEmployee = () => {
    setEmployee(true)
  }
  const openTravels = () => {
    setTravels(true)
  }
  useEffect(() => {
    console.log(user)
    lista()
  }, [])
  
  return (
    <div className={styles.content}>
      <Menu />
      <div className="container section">
        <div className={styles.pages}>
          <div className={styles.panel}>
            <Card
              title={`Agregar una nueva oficina`}
              onHandle={openOffice}
              icon={`bx bx-store`}
            />
            <Card
              title={`Agregar un nuevo empleado`}
              onHandle={openEmployee}
              icon={`bx bx-bus`}
            />
            <Card
              title={`Crear un nuevo viaje`}
              onHandle={openTravels}
              icon={`bx bx-lock`}
            />
          </div>
          <div className={styles.agencies}>
            <div className={styles.title}>
              <h2>Lista de Oficinas</h2>
            </div>
          <TableAgencies />
          </div>
          <div className={styles.users}>
            <div className={styles.title}>
              <h2>Lista de Empleados</h2>
            </div>
          <TableAgencies />
          </div>
          <ModalOffice open={office} close={() => setOffice(!office)} />
          <ModalEmployee open={employee} close={() => setEmployee(!employee)} />
          <ModalTravel open={travels} close={() => setTravels(!travels)} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;