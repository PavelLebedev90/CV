import React from 'react';
import classes from './MyWorks.module.css';
import MyWork from './MyWork/MyWork';
import todolist from './../../Photo/to-do-list.jpg'
import socialNetwork from './../../Photo/images.jpg'
import counter from './../../Photo/unnamed.png'
import cards from './../../Photo/cards.png'

const MyWorks = () => {
    return (
        <div className={classes.myWorks_wrapper} id={'works'}>
            <div className="content">
                <div className={classes.myWorks}>
                    <div className={classes.myWorks_header}>
                        Projects
                    </div>
                    <div className={classes.myWork}>
                        <MyWork photo={todolist}
                                link={'https://pavellebedev90.github.io/newTL/'}
                                header={'To Do List'}
                                description={'SPA for managing to-do lists and their items. Technologies: TypeScript, React, Redux,, Redux-thunk, Material UI'}
                        />
                        <MyWork photo={socialNetwork}
                                link={'https://pavellebedev90.github.io/project-1-typeScript/'}
                                header={'Social Network'}
                                description={'SPA for social actions - messaging and blogging.Technologies: TypeScript, React, Redux, Redux-thunk, Axios'}
                        />
                        <MyWork photo={counter}
                                link={'https://pavellebedev90.github.io/Counter/'}
                                header={'Counter'}
                                description={'Project for setting bounds and incrementing a number.Technologies: TypeScript, React, Redux, Local Storage'}
                        />
                        <MyWork photo={cards}
                                link={'https://pavellebedev90.github.io/cards'}
                                header={'Cards'}
                                description={'Сard learning project.Technologies: TypeScript, React, Redux, Modal window'}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;
