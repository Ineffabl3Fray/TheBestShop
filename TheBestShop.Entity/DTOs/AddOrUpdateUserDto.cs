﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheBestShop.Core.Entities;

namespace TheBestShop.Entity.DTOs
{
    public class AddOrUpdateUserDto: IDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool Status { get; set; }
        public DateTime RegisterDate { get; set; }
        public List<string> Roles { get; set; }
    }
}
