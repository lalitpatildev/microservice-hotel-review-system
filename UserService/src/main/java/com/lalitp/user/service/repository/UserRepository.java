package com.lalitp.user.service.repository;

import com.lalitp.user.service.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String>
{
    //if you want to implement any custom method or query then you are fell to write here

}
