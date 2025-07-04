<?php

require_once("repositorioContacts.php");

class RepositorioContactsSQL extends repositorioContacts
{
  protected $conexion;

  public function __construct($conexion)
  {
    $this->conexion = $conexion;
  }

  public function saveInBDD($post)
  {

    if (is_object($post)) {
      $post = (array) $post;
    }

    $sql = "INSERT INTO contacts values(default, :name, :email, :phone, :comments, :origin, :created_at)";
    $stmt = $this->conexion->prepare($sql);
    $stmt->bindValue(":name", $post['name'], PDO::PARAM_STR);
    $stmt->bindValue(":email", $post['email'], PDO::PARAM_STR);
    $stmt->bindValue(":phone", $post['phone'], PDO::PARAM_STR);
    $stmt->bindValue(":comments", $post['comments'], PDO::PARAM_STR);
    $stmt->bindValue(":origin", $post['origin'], PDO::PARAM_STR);
    $stmt->bindValue(":created_at", date("Y-m-d H:i:s"), PDO::PARAM_STR);

    $save = $stmt->execute();

    return $save;
  }
}
