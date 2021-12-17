package edu.ben.backend.repository;

import edu.ben.backend.model.UserAchievement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UserAchievementRepository extends JpaRepository<UserAchievement, Long> {

    UserAchievement findUserAchievementByAchievementIdAndUserId(Long achievementId, Long userId);
    List<UserAchievement> findUserAchievementByUserId(Long userId);

    @Transactional
    void deleteUserAchievementByAchievementId(Long achievementId);
}
