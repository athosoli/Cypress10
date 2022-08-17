describe('login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Athos',
      instagram: '@athos',
      password: 'pwd123'
    }

    cy.login(user)
    cy.loggedUser(user.name)
  })

  it('nao deve logar com senha invalida', () => {
    const user = {
      instagram: '@papitorocks',
      password: '123456'
    }

    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar instagram inexistente', () => {
    const user = {
      instagram: '@rockspapito',
      password: '123456'
    }

    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatório',()=>{
    const user = {
        password: 'abc123'
      }
      cy.SemInstagram(user)
      cy.modalHaveText('Por favor, informe o seu código do Instagram!')
})
it('senha deve ser obrigatória',()=>{
    const user = {
        instagram: '@Athos',
      }
      cy.SemSenha(user)
      cy.modalHaveText('Por favor, informe a sua senha secreta!')
})
it('todos os campos são obrigatórios',()=>{
      cy.SemInformaçoes()
      cy.modalHaveText('Por favor, informe suas credenciais!')
})
})
