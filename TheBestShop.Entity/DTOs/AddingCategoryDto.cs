﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheBestShop.Core.Entities;

namespace TheBestShop.Entity.DTOs
{
    public class AddingCategoryDto: IDto
    {
        public string Name { get; set; }
    }
}
