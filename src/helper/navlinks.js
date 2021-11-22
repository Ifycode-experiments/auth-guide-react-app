
/*------------------------------------------------------------------------------
* Both modal and form null - no modal popup wanted
* modal (string) and form (true) - Modal popup (with form, but no modal content)
* modal (string) and form (false) - Modal popup (with modal content, but no form)
-------------------------------------------------------------------------------*/

const links = {
  documentation: {
    name: 'Documentation',
    alias: null,
    form: null
  },
  tutorial: {
    name: 'Tutorial',
    alias: null,
    form: null
  },
  /*blog: {
    name: 'Blog posts',
    alias: null,
    form: null
  },*/
  account: {
    name: 'Account',
    alias: 'modal-account',
    form: false
  },
  logout: {
    name: 'Logout',
    alias: null,
    form: null
  },
  /*create: {
    name: 'Create post',
    alias: 'modal-create',
    form: true
  },*/
  login: {
    name: 'Login',
    alias: 'modal-login',
    form: true
  },
  signup: {
    name: 'Sign Up',
    alias: 'modal-signup',
    form: true
  },
  help: {
    name: 'Show Help',
    alias: 'modal-help',
    form: false
  }
}

export default links;
