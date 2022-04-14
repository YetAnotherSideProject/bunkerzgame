---
sidebar_position: 1
title: "Idee"
---

# Sammlung:

**Kombination aus Grepolis Style Real Time Strategy Game mit Eroberungen/PVP und Bunker Aufbauspiel:**

## Notizen:

Browser/web/app basiertes Echtzeitstrategiespiel aka Grepolis, die Stämme etc.

Hauptpoint: Kein Pay2Win, volle Transparenz für Spieler, Mind. Selbstdeckend durch Zusatzfunktionen

Gameplay:

Welt:

Städte/Dörfer

Größere Inseln ink. Flüsse

Städte auf Land, am Meer, am Fluss

Spez. Ressourcen nur in gewissen Städten z.B. Shciffe nur am Fluss/meer -> Hafen

Eisen/steien -> Berge

Holz -> Wald

Langfristige Erweiterung des Rohstoffabbaus -> mehr Wälder/Holzfäller, Steinmbrüche, Minen (leveln, unendlich?)

Rohstoffe veredeln Anno Style

Handelsrouten (dauerhaft) (Überfallbar?)

Landstädte beiten große Gebiete, see/flussstädte bieten Zugang zum Land, Flüsse werden durch angrenzende Städte blockiert

Städte haben Level anstatt Punkte ggf. Unendlich

Char Level (unendlich oder per Welt?) wird zusammen gesetzt aus den Stadtbevölkerung

Unendliches char Leveln Belohnungen alle x Level

## Technische Umsetzung:

Pro "Welt/Instanz" Eine Datenbank
Hinterlegung von Aufträgen mit Enddatum
Client agiert Pullend und zeigt Timer an. Bei Ablauf von Timern automatsiche Aktualisierung -> Pull
Server/Datenbank Single Source of truth, Aktionen vom client anstoßen, Prüfung auf Server Seite -> Datenbank vorraussetzung prüfen

Cypress JS Test Framework
