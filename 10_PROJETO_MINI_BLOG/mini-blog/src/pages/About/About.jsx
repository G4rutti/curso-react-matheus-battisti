import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="my-28 flex flex-col justify-center min-h-60h
    md:mx-auto">
      <h2 className="font-bold text-2xl mb-5 text-slate-900
      md:mx-auto">
        Sobre o Mini <span>Blog</span>
      </h2>
      <p className="text-slate-600 text-justify mb-10
      md:mx-auto ">
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <div className="flex justify-center">
        <Link to="/posts/create" className="text-slate-400 mb-10 py-3 px-8 bg-slate-700 hover:text-slate-700 transition-all duration-500">
          Criar post
        </Link>
      </div>
      
    </div>
  );
};

export default About