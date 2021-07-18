import React, { useState } from "react";
import * as S from "./styled";

export default function Repositories() {
  return (
    <S.Container>
      <S.Title>Repositorios</S.Title>
      <S.List>
        <S.ListItem>Repo 01</S.ListItem>
        <S.ListItem>Repo 02</S.ListItem>
        <S.ListItem>Repo 03</S.ListItem>
        <S.ListItem>Repo 04</S.ListItem>
      </S.List>
    </S.Container>
  );
}
