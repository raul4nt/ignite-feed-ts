import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    // extends de ImgHtmlAttributes que é uma interface que possui todos os
    // atributos que uma imagem de html pode ter. isso serve para nao termos que ficar 
    // colocando na interface de props absolutamente TUDO que formos usar(como src, alt, title, etc)
    // sempre temos que colocar o elemento dentro de <>, neste caso, é um image element
    hasBorder?: boolean; 
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
// export function Avatar(props) {
    // const hasBorder = props.hasBorder != false;

    // a const hasBorder checa se o hasBorder é diferente de False(ou seja, 
    // se alguém setou ele como false). se nao setou, ele será True. ou seja,
    // por padrao, o hasBorder será true caso ninguem passe como false.   

    // o return ficaria com hasBorder ao inves de props.hasBorder 

    // return (
    //     <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    //     src={props.src}
    //     />
    // )

    // desestruturação em js   

    // const user = { name: "Diego" }
    // const { name } = user;
    // arranca o name de dentro do objeto
    
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        // src={src}
        // alt={alt}
        // title={title}
            {...props}
        />
    )
}

// o <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
// usa uma operaçao ternaria em js! verifica se hasBorder é true, e, se for, 
// mostrara o avatarWithBorder. se nao, o styles.avatar


