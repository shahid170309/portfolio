package com.shahid.portfolio.repository;

import com.shahid.portfolio.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
}