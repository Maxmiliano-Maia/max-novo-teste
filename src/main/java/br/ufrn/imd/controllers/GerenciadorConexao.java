package br.ufrn.imd.controllers;

import java.sql.Connection;
import java.sql.DriverManager;

/**
* Classe responsável por fornecedor conexão com o banco de dados para a
* aplicação.
* 
* @author itamir.filho
*/
public class GerenciadorConexao {

    private static Connection conexao;

    /**
        * Método estático para obtenção de conexão.
        * 
        * @return
        */
    public static Connection getConexao() {

        if (conexao == null) {
          String username = "root";
          String password = "max";
          // Informa a URL do banco (siturb) e o timezone do servidor
          String url = "jdbc:mysql://localhost/siturb?serverTimezone=UTC";
          try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                conexao = DriverManager.getConnection(url, username, password);
          } catch (Exception e) {
                e.printStackTrace();
          }
        }
    return conexao;
    }
}