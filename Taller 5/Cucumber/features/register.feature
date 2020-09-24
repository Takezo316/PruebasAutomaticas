Feature: Register into losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

Scenario Outline: Register failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill the register form with <firstName> and <lastName> and <email> and <university> and <master> and <undergraduate> and <password>

    Examples:
      | firstName      | lastName            | email               | university           | master                 | undergraduate          | password |
      | Carlos         | Blanco              | takezo316@gmail.com | Universidad Nacional | Ingeniería de Software | Ingeniería Electrónica | .gG8f3..73fjNaT     |
      | Carlos         | Blanco              | takezo316@gmail.com | Universidad Nacional | Ingeniería de Software | Ingeniería Electrónica | .gG8f3..73fjNaT     |
	    | Carlos         | Blanco              |         		         | Universidad Nacional |                        | Ingeniería Electrónica | .gG8f3..73fjNaT     |
	    | Carlos         | Blanco              | takezo316@gmail.com | Universidad Nacional | Ingeniería de Software |                        | .gG8f3..73fjNaT     |
	    | Carlos         | Blanco              | takezo316@gmail.com | Universidad Nacional | Ingeniería de Software | Ingeniería Electrónica |		                  |
	    | Carlos         | Blanco              | takezo316@gmail.com | Universidad Nacional |                        | Ingeniería Electrónica | .gG8f3..73fjNaT     |
	    | Carlos         | Blanco              |         		         | Universidad Nacional |                        | Ingeniería Electrónica | .gG8f3..73fjNaT     |
	    | Carlos         | Blanco              | takezo316@gmail.com | Universidad Nacional | Ingeniería de Software | Ingeniería Electrónica | 1                   |