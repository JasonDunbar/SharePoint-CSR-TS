/*
  Copyright 2017 Atos Consulting Switzerland

  This file is part of SharePoint-CSR-TS.

  SharePoint-CSR-TS is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  SharePoint-CSR-TS is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with SharePoint-CSR-TS.  If not, see <http://www.gnu.org/licenses/>.
*/

import { Title } from "./Fields/Title"

export class Fields {
  Title: Title;

  constructor() {
    this.Title = new Title();
  }
}