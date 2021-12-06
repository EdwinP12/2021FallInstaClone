import Session from "../services/session.js";
        function login(){
            Session.Error('Not implemented yet');

        }
        function name(){
            return Session.user.firstName + ' ' + Session.user.lastName;
        }

        export default () => !Session.user ?
    <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light" onClick={ login }>
            Log in
          </a>
    </div> :
    <div >
        Hello {name()} 
    </div>
