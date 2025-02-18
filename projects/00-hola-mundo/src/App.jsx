import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {


    const users = [
        {
            userName: 'cristiancc',
            name: 'Cristian Cabrera',
            isFollowing: true
        },
        {
            userName:'ppp',
            name: 'Pedro Perez',
            isFollowing: false
        },
        {
            userName:'Raki',
            name: 'Ramón Izquierdo',
            isFollowing: true
        },
        {
            userName:'Maru',
            name: 'Maria Ruiz',
            isFollowing: false
        }
    ]
    
    
    return (
        <>
            <section className='App'>
             {
                users.map(user =>{
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard 
                            key={userName} // este identeficador debe ser unico, en este caso vamos a usar el userName // lo mejor es usar una id de base de datos.
                            userName={userName} 
                            initialIsFollowing={isFollowing}
                        >
                            {name}    
                        </TwitterFollowCard>
                    )
                })
             }
            </section>
        </>
    )
}