import{PencilLine} from 'phosphor-react';
import {Avatar} from './avatar';
import styles from './Sidebar.module.css';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=300&auto=format&fit
            =crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div className={styles.profile}>
            <Avatar hasBorder={true} src="https://github.com/SahRB.png" alt="" />
            <strong>Sabrina Barros</strong>
                <span>Software developer</span>
            </div>
            <footer>
                <a href=''>
                    
                <PencilLine size={20}/>
                    Editar Perfil</a>
            </footer>
        </aside>
    );
}